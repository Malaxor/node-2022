const path = require('path');
const router = require('express').Router();
const { products } = require('./admin');

router.get('/', (req, res) => {
  res.render('shop');
});

module.exports = router;