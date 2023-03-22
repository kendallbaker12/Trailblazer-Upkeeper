const express = require('express')

const {
    createPaint,
    getPaint,
    getPaints,
    deletePaint,
    updatePaint
} = require('../controllers/paintController')

const router = express.Router()

//Get all paints
router.get('/', getPaints)

//Get a single paint
router.get('/:id', getPaint)

//Post a new paint
router.post('/', createPaint)

//Delete a paint
router.delete('/:id', deletePaint)

router.patch('/:id', updatePaint)


module.exports = router