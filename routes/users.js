const express = require('express');

const router = express.Router();


/* Put in the buttom just in case */
router.get('/:username', (req, res, next) => {
  res.render('user/profile', { title: 'User route' });
});

module.exports = router;
