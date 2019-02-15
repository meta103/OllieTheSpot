const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'ollie the spot' });
});
router.post('/', (req, res, next) => {
  req.session.location = req.body.location.split(',');


  res.redirect('/auth');
});

module.exports = router;
