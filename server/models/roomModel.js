const mongoose = require('mongoose')

const Schema = mongoose.Schema

const roomsSchema = new Schema({
    roomNumber: {
        type: Number,
        required: true
    },
    roomType: {
        type: String,
        lowercase: true,
        enum: {
            values: ['classroom', 'office', 'storage', 'studyroom'],
            message: '{VALUE} is not supported'
        }
    }
})