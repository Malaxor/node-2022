const router = require('express').Router();
const { 
  getAddProduct, 
  postAddProduct, 
  getEditProduct, 
  getProducts,
  postEditProduct,
  deleteProduct
} = require('../controllers/admin');

router.route('/add-product').get(getAddProduct).post(postAddProduct);

router.route('/edit-product/:productId').get(getEditProduct);
router.route('/edit-product').post(postEditProduct);

router.route('/products').get(getProducts);
router.route('/delete-product').post(deleteProduct);

module.exports = router;