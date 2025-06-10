const express = require('express')
const upload = require('../upload') // Adjust path as needed
const {
  createAnimal,
  getAnimals,
  getAnimal,
  deleteAnimal,
  updateAnimal
} = require('../controllers/animalController')

const router = express.Router()

router.get('/', getAnimals)
router.get('/:id', getAnimal)
router.post('/', upload.single('image'), createAnimal)
router.delete('/:id', deleteAnimal)
router.patch('/:id', updateAnimal)

module.exports = router
