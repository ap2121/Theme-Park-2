const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        console.log('Successfully connected to MongoDB')
    })
    .catch(e => {
        console.log('Connection Error', e.message)
    })

    const db = mongoose.connection

    module.exports = db;