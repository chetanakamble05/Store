const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    password : {
        type: String,
        required : true
    },
    confirmpassword : {
        type: String,
        required : true
    }
},
{
    versionKey:false
})

module.exports = mongoose.model('User', userSchema);

