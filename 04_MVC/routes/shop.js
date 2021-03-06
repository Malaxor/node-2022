const router = require('express').Router();
const { 
  getProducts, 
  getProduct, 
  getIndex,
  getCart, 
  postCart, 
  getCheckout, 
  getOrders,
  postCartDeleteProduct 
} = require('../controllers/shop');

router.get('/', getIndex);

router.get('/products', getProducts);
router.get('/products/:id', getProduct);

router.get('/cart', getCart);
router.post('/cart', postCart);
router.post('/cart-delete-item', postCartDeleteProduct);

router.get('/orders', getOrders);
router.get('/checkout', getCheckout);

module.exports = router;