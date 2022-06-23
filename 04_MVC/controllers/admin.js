const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
  res.render('admin/edit-product', { 
    pageTitle: 'Add Product',
    path: '/admin/add-product'
  });
}

exports.postAddProduct = (req, res) => {
  const product = new Product({ ...req.body });
  product.save();
  res.redirect('/');
}

exports.getEditProduct = (req, res) => {
  res.render('admin/edit-product', { 
    pageTitle: 'Edit Product',
    path: '/admin/edit-product',
    editing: Boolean(req.query.edit)
  });
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