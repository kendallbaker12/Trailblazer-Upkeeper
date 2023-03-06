const mongoose = require('mongoose')

const Schema = mongoose.Schema

const buildingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    classrooms: {
        type: [mongoose.Types.ObjectId],
        ref: "Rooms",
        required: true
    },

}, { timestamps: true })

module.exports = mongoose.model('Building', buildingSchema)

