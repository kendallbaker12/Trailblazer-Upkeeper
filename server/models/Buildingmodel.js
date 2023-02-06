const mongoose = require('mongoose')

const Schema = mongoose.Schema

const buildingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    classrooms: {
        type: Number,
        required: true
    },

}, { timestamps: true })

module.exports = mongoose.model('Building', buildingSchema)

