const Product = require('../models/product');

exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', { 
      pageTitle: 'All Products',
      path: '/products',
      products
    });
  });
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', { 
      pageTitle: 'Shop',
      path: '/',
      products
    });
  });
}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', { 
    pageTitle: 'Your Cart',
    path: '/cart'
  });
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', { 
    pageTitle: 'Your Cart',
    path: '/checkout'
  });
}

