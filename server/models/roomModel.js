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
            values: ['classroom', 'office', 'storage', 'studyroom', 'hallway'],
            message: '{VALUE} is not supported'
        }
    },
    roomPaints: {
        type: [mongoose.Types.ObjectId],
        required: true,
        ref: 'Paints'
    }
})

module.exports = mongoose.model('Rooms', roomsSchema)