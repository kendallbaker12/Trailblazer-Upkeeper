const express = require('express')

const {
    createPaint,
    getPaint,
    getPaints
} = require('../controllers/paintController')

const router = express.Router()

//Get all paints
router.get('/', getPaints)

//Get a single paint
router.get('/:id', getPaint)

//Post a new paint
router.post('/', createPaint)


module.exports = router