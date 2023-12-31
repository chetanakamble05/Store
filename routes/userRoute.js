const express = require('express')
const router = express.Router();
const {userRegister} = require('../controllers/userController')
const {checkRegister} = require('../middleware/usermiddle')
const {userLogin} = require('../controllers/userController')
const {checkUserLogin} = require('../middleware/usermiddle')

router.post('/registeruser',checkRegister, userRegister)
router.post('/userlogin', checkUserLogin, userLogin);

module.exports = router 
