const express = require('express')
const {
    createRoom,
    getRoom,
    getRooms,
    deleteRoom
} = require('../controllers/roomController.js')

const router = express.Router()

//Get all rooms in a building
router.get('/:buildingId/rooms', getRooms)

//Get a single room in a building
router.get('/:buildingId/rooms/:roomId', getRoom)

//Post a new room
router.post('/:buildingId/rooms', createRoom)

//Delete a room
router.delete('/:buildingId/rooms/:roomId', deleteRoom)

module.exports = router