const path = require('path');
const router = require('express').Router();

const products = [];

router.get('/add-product', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

router.post('/add-product', (req, res) => {
  products.push({ title: req.body.title });
  console.log(products)
  res.redirect('/');
});

exports.routes = router;
exports.products = products;