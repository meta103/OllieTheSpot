const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const User = require('../models/user');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const router = express.Router();

// const storage = cloudinaryStorage({
//   cloudinary,
//   folder: 'users',
//   allowedFormats: ['jpg', 'png'],
//   transformation: [{ width: 500, height: 500, crop: 'limit' }],
// });

const upload = multer({ dest: './public/images/Profile-pictures/uploads' });

router.get('/edit', (req, res, next) => {
  res.render('user/edit');
  console.log(req.session.currentUser.username);
});
router.post('/edit', upload.single('image'), (req, res, next) => {
  const currentUserName = req.session.currentUser.username;
  const { bio } = req.body;
  const image = req.file;

  cloudinary.v2.uploader.upload(image.path, (error, result) => {
    console.log(result);
  })
    .then((result) => {
      User.findOneAndUpdate({ username: currentUserName }, { bio, image: result.url })
        .then(() => {
          req.session.currentUser.image = result.url;
        })
        .then(() => {
          req.session.currentUser.bio = bio;

          res.render('user/profile');
        })
        .catch(next);
    });
});

/* Put in the buttom just in case */
router.get('/:username', (req, res, next) => {
  if (res.locals.currentUser.username === req.params.username) {
    res.render('user/profile', { title: 'User route' });
  } else {
    res.redirect('/');
  }
});
/* To enter to owner's profile by clicking on the user name in the spot details */
router.get('/guest/:username', (req, res, next) => {
  const { username } = req.params;
  if (username === req.session.currentUser.username) {
    res.redirect(`/users/${username}`);
  }
  User.findOne({ username })
    .then((owner) => {
      res.render('user/profile-guest', { owner });
    })
    .catch(next);
});

module.exports = router;
