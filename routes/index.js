const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'ollie the spot' });
});
router.post('/', (req, res, next) => {
  if (req.body.location == "") {
    req.session.location = "2.1905802,41.397759199999996";
    console.log(req.session.location)
  }
  else {
    req.session.location = req.body.location.split(',');
    console.log("internet working mother focker")

  }



  res.redirect('/auth');
});

module.exports = router;
