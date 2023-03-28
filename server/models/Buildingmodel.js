const mongoose = require('mongoose')

const Schema = mongoose.Schema

const buildingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rooms: {
        type: Number
    },

}, { timestamps: true })

module.exports = mongoose.model('Building', buildingSchema)

