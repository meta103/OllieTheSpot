const express = require('express');

const router = express.Router();


/* Put in the buttom just in case */
router.get('/:username', (req, res, next) => {
  res.render('index', { title: 'User route' });
});

module.exports = router;
