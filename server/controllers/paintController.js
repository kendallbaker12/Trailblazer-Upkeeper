const paint = require('../models/paintModel.js')
const mongoose = require('mongoose')


//get all paints on campus
const getPaints = async (req, res) => {
    console.log("testing getpaints")
    const paints = await paint.find({})

    res.status(200).json(paints)
}

//get a specific paint
const getPaint = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: 'No such paint id to get.' })
    }

    const pnt = await paint.findById(id)

    if (!pnt) {
        return res.status(404).json({ error: 'No such paint.' })
    }

    res.status(200).json(pnt)
}


//create a new paint
const createPaint = async (req, res) => {
    let pnt = {
        paintName: req.body.paintName,
        paintFinishes: req.body.paintFinishes,
        paintComposition: req.body.paintComposition
    }
    try {
        pntindb = await paint.create(pnt)
        res.status(200).json(pnt)

    } catch (error) {
        res.status(500).json(error);
        return;
    }
    if (!pnt) {
        return res.status(404).json({ error: 'No such paint' })
    }
}

//Delete a paint
const deletePaint = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: 'No such paint id to delete.' })
    }
    const pnt = await paint.findOneAndDelete({ _id: id })

    if (!pnt) {
        return res.status(404).json({ error: 'No such paint to delete.' })
    }

    res.status(200).json(pnt)
}

//Update a paint
const updatePaint = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: 'No such paint id to update.' })
    }

    const pnt = await paint.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!pnt) {
        return res.status(404).json({ error: 'No such paint to update.' })
    }
    res.status(200).json(pnt)
}

module.exports = {
    getPaints,
    getPaint,
    createPaint,
    deletePaint,
    updatePaint
}

