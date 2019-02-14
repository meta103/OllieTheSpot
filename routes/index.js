const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'ollie the spot' });
});
router.post('/', (req, res, next) => {
  req.session.location = req.body.location.split(',');
  console.log('res.locals.currentUser.location: ', res.locals.currentUser.location);

  res.redirect('/auth');
});

module.exports = router;
