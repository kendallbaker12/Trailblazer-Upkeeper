const express = require('express')
const {
    createRoom,
    getRoom,
    getRooms
} = require('../controllers/roomController.js')

const router = express.Router()

//Get all rooms in a building
router.get('/:buildingId/rooms', getRooms)

//Get a single room in a building
router.get('/:buildingId/rooms/:roomId', getRoom)

//Post a new room
router.post('/:buildingId/rooms', createRoom)

module.exports = router