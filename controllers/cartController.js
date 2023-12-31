const Cart = require('../models/cartmodel');
const Product = require('../models/productmodel')

exports.addtocart = async (req, res) => {
    console.log("user>>", req.body);
    try {
        const { productData, quantity, userId } = req.body;

        console.log("product : ", productData._id, " userid:", userId, "quantity :", quantity);

        const product = await Product.findById(productData._id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        const productIdString = productData._id.toString();

        let cartItem = await Cart.findOne({ 'productData._id': productIdString, userId });
        console.log("cartItem", cartItem);

        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cartItem = new Cart({
                productData,
                quantity,
                userId,
            });
        }

        await cartItem.save();

        res.status(200).json({ message: 'Product added to cart successfully', data: cartItem });
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deleteFromCart = async (req, res) => {
    try {
        const { cartId } = req.params;

        const cartItem = await Cart.findById(cartId);
        if (!cartItem) {
            return res.status(404).json({ error: 'Cart item not found' });
        }

        await cartItem.remove();

        res.status(200).json({ message: 'Product removed from cart successfully' });
    } catch (error) {
        console.error('Error deleting from cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


exports.getAllCartItems = async (req, res) => {
    try {
        const { userId } = req.params;
        const cartItems = await Cart.find({ userId });
        const cartTotal = cartItems.reduce((total, item) => total + item.quantity * item.productData.productPrice, 0);

        res.status(200).json({ data: cartItems, cartTotal });
    } catch (error) {
        console.error('Error getting cart items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};