const express = require('express');
const { getCartItems, addItemToCart, removeItemFromCart } = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(protect, getCartItems).post(protect, addItemToCart);
router.route('/:id').delete(protect, removeItemFromCart);

module.exports = router;
