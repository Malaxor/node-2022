const path = require('path');
const router = require('express').Router();

const products = [];

router.get('/add-product', (req, res) => {
  res.render('add-product', { 
    path: '/admin/add-product'
  });
});

router.post('/add-product', (req, res) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;