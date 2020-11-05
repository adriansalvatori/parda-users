const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    email:{
        type: String, required: true
    },
    phone:{
        type: String, required: true
    },
    country:{
        type: String, required: true
    },
    occupation:{
        type: String, required: true
    },
    password:{
        type: String
    }
})

module.exports =  mongoose.model('User', userSchema)