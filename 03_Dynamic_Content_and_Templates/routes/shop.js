const path = require('path');
const router = require('express').Router();
const { products } = require('./admin');

router.get('/', (req, res) => {
  console.log(products)
  res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
});

module.exports = router;