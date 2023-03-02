const mongoose = require('mongoose')

const Schema = mongoose.Schema

const paintsSchema = new Schema({
    paintName: {
        type: String,
        required: true,
        lowercase: true,
    },

})