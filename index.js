const express = require('express')
const mongoose = require('mongoose')
const app = express()
const userRoutes = require('./routes/index');
const cors = require('cors')
require('dotenv').config();

const connectionString = process.env.MONGODB_CONNECTION_STRING;
const connectDB =(url) => {
    return mongoose.connect(connectionString,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
}

app.use(express.json())
app.use(cors())

app.use('/productimages', express.static('productimages'));

app.use(userRoutes);


const port = 3040

const start = async() => {
    try {
        await connectDB()
        app.listen(port, console.log(`server is litening on port ${port}...`))
    } catch (error) {
        console.log(error);   
    }
}

start()

