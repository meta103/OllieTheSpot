const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/edit', (req, res, next) => {
  res.render('user/edit');
  console.log(req.session.currentUser.username);
});
router.post('/edit', (req, res, next) => {
  const currentUserName = req.session.currentUser.username;
  const { bio } = req.body;

  User.findOneAndUpdate({ username: currentUserName }, { bio })
    .then(() => {
      req.session.currentUser.bio = bio;
      res.redirect('/users/profile');
    })
    .catch(next);
});

/* Put in the buttom just in case */
router.get('/:username', (req, res, next) => {
  res.render('user/profile', { title: 'User route' });
});

module.exports = router;
