const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'ollie the spot' });
});
router.post('/', (req, res, next) => {
  if (req.body.location) {
    req.session.location = req.body.location.split(',');
  } else {
    req.session.location = [2.190641, 41.397706];
  }
  console.log('res.locals.currentUser.location: ', res.locals.currentUser.location);
  res.redirect('/auth');
});

module.exports = router;
