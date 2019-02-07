const express = require('express');

const router = express.Router();

const Spot = require('../models/spot');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'spot route' });
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

module.exports = router;
