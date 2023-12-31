const Product = require('../models/productmodel');

exports.createProduct = async (req, res) => {
    try {
        const { productName, productBrand, productDescription, productPrice } = req.body;
        const imagename = req.file.filename;

        const productImage = req.protocol + '://' + req.get('host') + '/productimages/' + imagename;

        console.log("productimage::",productImage );
        const newProduct = new Product({
            productName,
            productImage,
            productBrand,
            productDescription,
            productPrice
        });

        const savedProduct = await newProduct.save();
        res.status(201).json({ message: 'Product created successfully', data: savedProduct });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();
        res.status(200).json({ data: allProducts });
    } catch (error) {
        console.error('Error getting all products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.productId;

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        await Product.findByIdAndDelete(productId);

        res.status(200).json({ message: 'Product deleted successfully', data: product});
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
