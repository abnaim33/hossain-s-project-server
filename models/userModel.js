// const {Schema}=require('mongoose')

const mongoose = require("mongoose")

const userModel = new mongoose.Schema({
    emailOrPhone: {
        type: String,
        required: [true, "Please enter email or phone number"]
    },
    password: {
        type: String,
        required: [true, "Please enter valid password"]
    }
})

module.exports = mongoose.model('Users', userModel)