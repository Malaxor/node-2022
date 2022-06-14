const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
  res.render('add-product', { 
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
}

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
}

exports.getProducts = (req, res) => {
  const products = Product.fetchAll();
  res.render('shop', { 
    pageTitle: 'Shop',
    path: '/',
    products,
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
}
