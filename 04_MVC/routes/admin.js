const router = require('express').Router();
const { getAddProduct, postAddProduct, getProducts } = require('../controllers/admin');

router.route('/add-product').get(getAddProduct).post(postAddProduct);
router.route('/products').get(getProducts)

module.exports = router;