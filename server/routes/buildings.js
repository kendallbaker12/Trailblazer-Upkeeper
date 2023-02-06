const express = require('express')
const building = require('../models/Buildingmodel.js')

const router = express.Router()


//Get all buildings
router.get('/', (req, res) => {
    res.json({ mssg: 'GET all buildings' })
})

//Get a single Building
router.get('/:id', (req, res) => {
    res.json({ mssg: 'Get a single building' })
})

//Post a new building
router.post('/', async (req, res) => {
    const { name, classrooms } = req.body
    console.log(name)
    console.log(classrooms)

    try {
        const bld = await building.create({ name: name, classrooms: classrooms })
        res.status(200).json(bld)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

//Delete a building
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'Delete a new building' })
})

//update a building
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'Update a new building' })
})

module.exports = router