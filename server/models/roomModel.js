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
            values: ['classroom', 'office', 'storage', 'studyroom', 'hallway', 'lobby', 'misc'],
            message: '{VALUE} is not supported'
        }
    },
    // roomPaints: {
    //     type: [mongoose.Types.ObjectId],
    //     required: true,
    //     ref: 'Paints'
    // },
    buidlingID: {
        type: [mongoose.Types.ObjectId],
        // required: true,
        ref: 'Building'
    }
})

module.exports = mongoose.model('Rooms', roomsSchema)