const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
  res.render('admin/add-product', { 
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
}

exports.postAddProduct = (req, res) => {
  const product = new Product({ ...req.body });
  product.save();
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('admin/products', { 
      pageTitle: 'Admin Products',
      path: '/admin/products',
      products
    });
  });
}