const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

require('dotenv').config();


const router = express.Router();
// save the images in the correct directory
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
const upload = multer({ dest: './public/images/uploads' });
const Spot = require('../models/spot');
const User = require('../models/user');

router.get('/', (req, res, next) => {
  Spot.find()
    .then((spots) => {
      res.render('spots/show', { spots, token: process.env.MAPBOX });
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
  const owner = req.session.currentUser._id;
  const image = req.file;
  const imagePathRaw = image.path;
  cloudinary.v2.uploader.upload(image.path, (error, result) => {
    Spot.create({
      owner,
      name,
      location: {
        type: "Point",
        coordinates: location.split(',')
      },
      description,
      image: result.url,
    })
      .then((spot) => {
        spot.save();
        res.redirect('/spots');
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Spot.findById(id)
    .then((spot) => {
      User.findById(spot.owner)
        .then((user) => {
          res.render('spots/details', { spot, user, token: process.env.MAPBOX });
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
