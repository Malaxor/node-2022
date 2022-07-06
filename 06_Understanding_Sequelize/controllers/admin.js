const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getAddProduct = (req, res) => {
  res.render('admin/edit-product', { 
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
}

exports.postAddProduct = (req, res) => {
  Product.create({ ...req.body })
  .then(() => res.redirect('/'))
  .catch(err => console.error(err));
}

exports.getEditProduct = (req, res) => {
  Product.findById(req.params.productId, product =>  {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', { 
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: req.query.edit,
      product
    });
  });
}

exports.postEditProduct = (req, res) => {
  const { productId: id, ...rest } = req.body;
  const updatedProduct = new Product({ id, ...rest });
  updatedProduct.save();
  res.redirect('/admin/products');
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

exports.postDeleteProduct = (req, res, next) => {
  const { productId, price } = req.body;
  Product.deleteById(productId);
  Cart.deleteProduct(productId, price);
  res.redirect('/admin/products')
}