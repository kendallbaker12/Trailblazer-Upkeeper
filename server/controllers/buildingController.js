const building = require('../models/Buildingmodel.js')
const mongoose = require('mongoose')


//get all buildings
const getBuildings = async (req, res) => {
    const buildings = await building.find({})

    res.status(200).json(buildings)
}

//get a single building
const getBuilding = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: 'No such building id to get.' })
    }

    const bld = await building.findById(id)

    if (!bld) {
        return res.status(404).json({ error: 'No such buidling.' })
    }

    res.status(200).json(bld)
}


//create new building
const createBuilding = async (req, res) => {
    const { name, rooms } = req.body
    console.log(name)
    console.log(rooms)

    //add doc to db
    try {
        const bld = await building.create({ name: name, rooms: rooms })
        res.status(200).json(bld)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//delete a building
const deleteBuilding = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: 'No such building id to delete.' })
    }
    const bld = await building.findOneAndDelete({ _id: id })

    if (!bld) {
        return res.status(404).json({ error: 'No such buidling to delete.' })
    }

    res.status(200).json(bld)
}

//update a building
const updateBuilding = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: 'No such building id to update.' })
    }

    const bld = await building.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!bld) {
        return res.status(404).json({ error: 'No such buidling to update.' })
    }
    res.status(200).json(bld)
}

module.exports = {
    createBuilding,
    getBuildings,
    getBuilding,
    deleteBuilding,
    updateBuilding,
}
