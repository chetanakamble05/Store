const Product = require('../models/productmodel');

exports.checkProductDetails = async(req, res, next) => {
    try {
        const { productName, productBrand, productDescription, productPrice } = req.body;

        if (!productName || !productBrand || !productDescription || !productPrice) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        next();
    } catch (error) {
        res.status(500).json({
            status: 500,
            message:"internal server error"
        })
    }
}