const Cart = require('../models/Cart');

// @desc    Get cart items
// @route   GET /api/cart
// @access  Private
const getCartItems = async (req, res) => {
  const cartItems = await Cart.find({ user: req.user._id });
  res.json(cartItems);
};

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
const addItemToCart = async (req, res) => {
  const { product, qty } = req.body;

  const itemExists = await Cart.findOne({ user: req.user._id, product });

  if (itemExists) {
    itemExists.qty += qty;
    const updatedItem = await itemExists.save();
    res.json(updatedItem);
  } else {
    const cartItem = new Cart({
      user: req.user._id,
      product,
      qty,
    });

    const createdItem = await cartItem.save();
    res.status(201).json(createdItem);
  }
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/:id
// @access  Private
const removeItemFromCart = async (req, res) => {
  const cartItem = await Cart.findById(req.params.id);

  if (cartItem) {
    await cartItem.remove();
    res.json({ message: 'Item removed from cart' });
  } else {
    res.status(404);
    throw new Error('Item not found');
  }
};

module.exports = {
  getCartItems,
  addItemToCart,
  removeItemFromCart,
};
