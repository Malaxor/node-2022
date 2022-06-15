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
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
}

exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', { 
      pageTitle: 'Shop',
      path: '/',
      products,
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
}
