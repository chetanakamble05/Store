const express = require('express')
const router = express.Router();
const multer = require('multer');
const { createProduct } = require('../controllers/productController')
const { checkProductDetails } = require('../middleware/productmiddle')
const { getAllProducts } = require('../controllers/productController')
const { deleteProduct } = require('../controllers/productController')



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'productimages/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(new Error('Only PNG and JPEG files are allowed!'), false);
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post('/createproduct', upload.single('productImage'), checkProductDetails, createProduct)
router.get('/getallproduct', getAllProducts)
router.delete('/deleteproduct/:productId', deleteProduct)

module.exports = router 