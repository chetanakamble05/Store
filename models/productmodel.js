const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    productImage: {
        type: String,
        required: true,
    },
    productBrand: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true,
    },
    productPrice: {
        type: String,
        required: true,
    }
},
{
    versionKey:false
})

module.exports = mongoose.model('Product', productSchema);

