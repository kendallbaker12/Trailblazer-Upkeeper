const express = require('express')
const {
    createBuilding,
    getBuildings,
    getBuilding,
    deleteBuilding,
    updateBuilding
} = require('../controllers/buildingController')

const router = express.Router()


//Get all buildings
router.get('/', getBuildings)

//Get a single Building
router.get('/:id', getBuilding)

//Post a new building
router.post('/', createBuilding)


//Delete a building
router.delete('/:id', deleteBuilding)

//update a building
router.patch('/:id', updateBuilding)

module.exports = router