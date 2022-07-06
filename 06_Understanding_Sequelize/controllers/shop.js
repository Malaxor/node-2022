const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getIndex = (req, res, next) => {
  Product.findAll()
  .then(products => {
    res.render('shop/index', { 
      pageTitle: 'All Products',
      path: '/products',
      products
    });
  })
  .catch(err => console.error(err));
}

exports.getProducts = (req, res) => {
  Product.findAll()
  .then(products => {
    res.render('shop/product-list', { 
      pageTitle: 'All Products',
      path: '/products',
      products
    });
  })
  .catch(err => console.error(err));
}

exports.getProduct = (req, res, next) => {
  Product.findById(req.params.id)
  .then(([product]) => {
    res.render('shop/product-detail', {
      pageTitle: product.title,
      path: '/products',
      product: product[0]
    });
  })
  .catch(err => console.error(err));
}

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = products.reduce((accu, product) => {
        const cartProduct = cart.products.find(p1 => p1.id === product.id);
        if (cartProduct) {
          accu.push({ product, qty: cartProduct.qty });
        }
        return accu;
      }, []);
      res.render('shop/cart', { 
        pageTitle: 'Your Cart',
        path: '/cart',
        cart: cartProducts
      });
    })  
  });
}

exports.postCart = (req, res, next) => {
  Cart.addProduct(req.body.productId, req.body.productPrice);
  res.redirect('/cart');
}

exports.postCartDeleteProduct = (req, res, next) => {
  Cart.deleteProduct(req.body.productId, req.body.productPrice);
  res.redirect('/cart');
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', { 
    pageTitle: 'Your Orders',
    path: '/orders'
  });
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', { 
    pageTitle: 'Your Cart',
    path: '/checkout'
  });
}

