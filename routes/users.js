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
    console.log('image path:', image.path);
  })
    .then((result) => {
      User.findOneAndUpdate({ username: currentUserName }, { bio, image: result.url });
      req.session.currentUser.image = result.url;
      req.session.currentUser.bio = bio;
    })
    .then(() => {
      res.redirect(`/users/${currentUserName}`);
    })
    .catch(next);
});

/* Put in the buttom just in case */
router.get('/:username', (req, res, next) => {
  const Spot = require('../models/spot');
  const { username } = req.params;
  if (res.locals.currentUser.username === req.params.username) {
    User.findOne({ username })
      .then((user) => {
        Spot.find({ owner: user._id })
          .then((spotByOwner) => {
            res.render('user/profile', { spotByOwner, title: 'User route' });
          });
      });
  } else {
    res.redirect('/');
  }
});
/* To enter to owner's profile by clicking on the user name in the spot details */
router.get('/guest/:username', (req, res, next) => {
  const { username } = req.params;
  const Spot = require('../models/spot');
  if (username === req.session.currentUser.username) {
    res.redirect(`/users/${username}`);
  }
  User.findOne({ username })
    .then((owner) => {
      User.findOne({ username })
        .then((user) => {
          Spot.find({ owner: user._id })
            .then((spotByOwner) => {
              res.render('user/profile-guest', { owner, spotByOwner });
            });
        });
    })
    .catch(next);
});

module.exports = router;
