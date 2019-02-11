const express = require('express');
const multer = require('multer');

const router = express.Router();
// save the images in the correct directory
const upload = multer({ dest: './public/images/uploads' });

const Spot = require('../models/spot');
const User = require('../models/user');

router.get('/', (req, res, next) => {
  Spot.find()
    .then((spots) => {
      res.render('spots/show', { spots });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/new', (req, res, next) => {
  res.render('spots/new');
  console.log(req.session.currentUser._id);
});

router.post('/new', upload.single('image'), (req, res, next) => {
  const { name, location, description } = req.body;
  const image = req.file;
  let imagePathRaw = image.path;
  // taking out the public from path
  imagePathRaw = imagePathRaw.split('public');
  imagePath = `${imagePathRaw[1]}`;
  const owner = req.session.currentUser._id;
  Spot.create({
    owner,
    name,
    location,
    description,
    image: imagePath,
  })
    .then((result) => {
      result.save();
      res.redirect('/spots');
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Spot.findById(id)
    .then((spot) => {
      console.log(spot.owner);
      User.findById(spot.owner)
        .then((user) => {
          res.render('spots/details', { spot, user });
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Spot.findById(id)
    .then((spot) => {
      res.render('spots/edit', { spot });
    });
});

router.post('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { name, description, location } = req.body;
  console.log(name, description, location);
  Spot.findByIdAndUpdate({ _id: id }, { name, description, location })
    .then(() => {
      res.redirect(`/spots/${id}`);
    })
    .catch(next);
});

router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Spot.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/spots');
    })
    .catch(next);
});

module.exports = router;
