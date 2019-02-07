// routes/auth.js

const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

// BCrypt to encrypt passwords
const bcryptSalt = 10;


router.get('/', (req, res, next) => {
  res.render('auth/access', {
    errorMessage: undefined,
  });
});

router.post('/signup', (req, res, next) => {
  const { username } = req.body;
  const { password } = req.body;
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);

  if (username === '' || password === '') {
    res.render('auth/access', {
      errorMessage: 'Indicate a username and a password to sign up',
    });
    return;
  }
  User.create({
    username,
    password: hashPass,
  })
    .then(() => {
      res.redirect('/spots');
    })
    .catch((error) => {
      next(error);
    });
});


router.post('/login', (req, res, next) => {
  const { username } = req.body;
  const { password } = req.body;

  if (username === '' || password === '') {
    res.render('auth/access', {
      errorMessage: 'Indicate a username and a password to sign up',
    });
    return;
  }

  User.findOne({ username })
    .then((user) => {
      if (!user) {
        res.render('auth/access', {
          errorMessage: "The username doesn't exist",
        });
        return;
      }
      if (bcrypt.compareSync(password, user.password)) {
        // Save the login in the session!
        req.session.currentUser = user;
        res.redirect('/');
      } else {
        res.render('auth/access', {
          errorMessage: 'Incorrect password',
        });
      }
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/logout', (req, res, next) => {
  req.session.destroy((err) => {
    // cannot access session here
    res.redirect('/access');
  });
});
module.exports = router;
