const room = require('../models/roomModel.js')
const building = require('../models/Buildingmodel.js')
const mongoose = require('mongoose')


//get all rooms in a building.
const getRooms = async (req, res) => {
    const buildingId = req.params.buildingId;
    let rmm;
    try {
        rmm = await building.findById(buildingId).populate('rooms');
    } catch (error) {
        res.status(500).json(error);
        return;
    }

    res.status(200).json(rooms)
}

//get a single room in a building
const getRoom = async (req, res) => {
    const roomId = req.params.roomId

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: 'No such room id to get.' })
    }
    let rmm;
    try {
        rmm = await room.findById(roomId);
    } catch (error) {
        res.status(500).json(error);
        return;
    }
    if (!rmm) {
        return res.status(404).json({ error: 'No such room.' })
    }
    res.status(200).json(rmm)
}

//create new room in building
const createRoom = async (req, res) => {
    const buildingId = req.params.buildingId;
    // const { roomNumber, roomType, } = req.body
    //add doc to db
    let bld;
    try {
        bld = await building.findById(buildingId);
        console.log(bld);
    } catch (err) {
        res.status(500).json(err)
        return;
    }
    let rmm = {
        roomNumber: req.body.roomNumber,
        roomType: req.body.roomType
    }
    let rmmindb;
    try {
        rmmindb = await room.create(rmm)
        res.status(200).json(rmm)

    } catch (error) {
        res.status(500).json(error);
        return;
    }
    if (!bld) {
        return res.status(404).json({ error: 'No such building.' })
    }
}

module.exports = {
    createRoom,
    getRoom,
    getRooms
}
