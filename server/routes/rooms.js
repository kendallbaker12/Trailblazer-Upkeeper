const express = require('express')
const {
    createRoom,
    getRoom,
    getRooms,
    deleteRoom,
    updateRoom
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

//update a room
router.patch('/:buildingId/rooms/:roomId', updateRoom)

module.exports = router