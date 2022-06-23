const router = require('express').Router();
const { getAddProduct, postAddProduct, getEditProduct, getProducts } = require('../controllers/admin');

router.route('/add-product').get(getAddProduct).post(postAddProduct);
router.route('/edit-product').get(getEditProduct);
router.route('/products').get(getProducts);

module.exports = router;