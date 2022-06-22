const router = require('express').Router();
const { 
  getProducts, 
  getProduct, 
  getIndex,
  getCart, 
  postCart, 
  getCheckout, 
  getOrders 
} = require('../controllers/shop');

router.get('/', getIndex);
router.get('/products', getProducts);
router.get('/cart', getCart);
router.post('/cart', postCart);
router.get('/orders', getOrders);
router.get('/checkout', getCheckout);
router.get('/products/:id', getProduct);

module.exports = router;