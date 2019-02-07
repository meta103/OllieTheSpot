const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/:username', (req, res, next) => {
  res.render('index', { title: 'User route' });
});

module.exports = router;
