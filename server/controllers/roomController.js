
const room = require('../models/roomModel.js')
const building = require('../models/Buildingmodel.js')
const paint = require('../models/paintModel.js')
const mongoose = require('mongoose')


//get all rooms in a building.
// router.get('/buildings/:buildingId/rooms', getRooms)
const getRooms = async (req, res) => {
    const buildingId = req.params.buildingId;
    let rmm;
    try {
        rmm = await room.find({ buildingID: buildingId })
        .populate({
            path: "roomPaints",
        });
        console.log(rmm)
    } catch (error) {
        res.status(500).json(error);
        console.log(error)
        return;
    }

    res.status(200).json(rmm)
}

//get a single room in a building
// router.get('/buildings/:buildingId/rooms/:roomId', getRoom)
const getRoom = async (req, res) => {
    const roomId = req.params.roomId

    if (!mongoose.Types.ObjectId.isValid(roomId)) {
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
// router.get('/buildings/:buildingId/rooms', createRoom)
const createRoom = async (req, res) => {
    console.log("test")
    const buildingId = req.params.buildingId;
    const paintId = req.params.paintId;
    //add doc to db
    let bld;
    try {
        //getting the building id
        bld = await building.findById(buildingId);
        console.log(bld);
    } catch (err) {
        res.status(500).json(err)
        return;
    }
    let pnt;
    try {
        //getting the paint id
        pnt = await paint.findById(paintId);
        console.log(pnt);
    } catch (err) {
        res.status(500).json(err)
        return;
    }
    let rmm = {
        roomNumber: req.body.roomNumber,
        roomType: req.body.roomType,
        roomPaints: req.body.roomPaints,
        buildingID: bld._id
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

const deleteRoom = async (req, res) => {
    const roomId = req.params.roomId
    if (!mongoose.Types.ObjectId.isValid(roomId)) {
        return res.status(404).json({ err: 'No such room id to delete.' })
    }
    const rmm = await room.findOneAndDelete({ _id: roomId })

    if (!rmm) {
        return res.status(404).json({ error: 'no such room to delete.' })
    }
}

const updateRoom = async (req, res) => {
    const roomId = req.params.roomId
    if (!mongoose.Types.ObjectId.isValid(roomId)) {
        return res.status(404).json({ err: "No such room id to update." })
    }

    const rmm = await room.findOneAndUpdate({ _id: roomId }, {
        ...req.body
    })
    if (!rmm) {
        return res.status(404).json({ error: 'No such room to update.' })
    }
    res.status(200).json(rmm)
}


module.exports = {
    createRoom,
    getRoom,
    getRooms,
    deleteRoom,
    updateRoom
}
