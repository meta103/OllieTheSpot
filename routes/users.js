const express = require('express');
const multer = require('multer');
const User = require('../models/user');

const router = express.Router();

const storage = cloudinaryStorage({
  cloudinary,
  folder: 'demo',
  allowedFormats: ['jpg', 'png'],
  transformation: [{ width: 500, height: 500, crop: 'limit' }],
});
const upload = multer({ dest: './public/images/Profile-pictures/uploads' });
router.get('/edit', (req, res, next) => {
  res.render('user/edit');
  console.log(req.session.currentUser.username);
});
router.post('/edit', upload.single('image'), (req, res, next) => {
  const currentUserName = req.session.currentUser.username;
  const { bio } = req.body;
  const image = req.file;
  let imagePathRaw = image.path;

  imagePathRaw = imagePathRaw.split('public');
  const imagePath = imagePathRaw[1];


  User.findOneAndUpdate({ username: currentUserName }, { bio, image: imagePath })
    .then(() => {
      req.session.currentUser.image = imagePath;
    })
    .then(() => {
      req.session.currentUser.bio = bio;

      res.render('user/profile');
    })
    .catch(next);
});

/* Put in the buttom just in case */
router.get('/:username', (req, res, next) => {
  if (res.locals.currentUser.username === req.params.username) {
    res.render('user/profile', { title: 'User route' });
  } else {
    res.redirect('/');
  }
});

module.exports = router;
