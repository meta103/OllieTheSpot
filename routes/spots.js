const express = require('express');

const router = express.Router();

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
  res.render('newSpot');
  console.log(req.session.currentUser._id);
});

router.post('/new', (req, res, next) => {
  const { name, location, description } = req.body;
  const owner = req.session.currentUser._id;
  Spot.create({
    owner, name, location, description,
  })
    .then((result) => {
      result.save();
      res.redirect('/');
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

module.exports = router;
