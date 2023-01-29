const express = require('express')

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
router.post('/', (req, res) => {
    res.json({ mssg: 'Post a new building' })
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