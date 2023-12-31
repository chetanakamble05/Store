const express = require('express')
const router = express.Router();
const { addtocart, deleteFromCart, getAllCartItems } = require('../controllers/cartController') 


router.post('/addtocart', addtocart)
router.delete('/deletefromcart/:cartId', deleteFromCart);
router.get('/getallcart/:userId', getAllCartItems);

module.exports = router