const mongoose = require('mongoose')

const Schema = mongoose.Schema

const paintsSchema = new Schema({
    paintName: {
        type: String,
        required: true,
        lowercase: true,
    },
    paintFinishes: {
        type: String,
        required: true,
        lowercase: true,
        enum: {
            values: ['eggshell', 'semigloss', 'matte', 'mediumgloss', 'highgloss', 'satin',],
            message: '{VALUE} is not supported'
        }
    },
    paintComposition: {
        type: String,
        lowercase: true,
    },

    //possibility to add paint used in different buildings.

})

module.exports = mongoose.model('Paints', paintsSchema)