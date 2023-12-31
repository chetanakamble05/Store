const express = require('express');
const Routes = express.Router({});
const userRoute = require('../routes/userRoute');
const productRoute = require('../routes/productRoute')
const cartRoute = require('../routes/cartRoute')

Routes.use('/api',userRoute)
Routes.use('/api',productRoute)
Routes.use('/api',cartRoute)

module.exports = Routes