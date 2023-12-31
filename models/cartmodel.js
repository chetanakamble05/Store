const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    productData: {
        type: Object,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
},
{
    versionKey:false
})

module.exports = mongoose.model('Cart', cartSchema);

