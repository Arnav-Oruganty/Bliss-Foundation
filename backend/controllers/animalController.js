const Animal = require('../models/animalModel')
const mongoose = require('mongoose')

// get all animals
const getAnimals = async (req, res) => {
    const animals = await Animal.find({}).sort({ createdAt: -1 })

    res.status(200).json(animals)
}

// get a single animal
const getAnimal = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such animal'})
    }

    const animal = await Animal.findById(id)

    if (!animal) {
        return res.status(404).json({ error: 'No such animal' })
    }

    res.status(200).json(animal)
}

// create new animal
const createAnimal = async (req, res) => {
    const { name, species, age, location, healthStatus = 'Healthy' } = req.body

    // Check if image was uploaded
    if (!req.file) {
        return res.status(400).json({ error: 'Image is required' });
    }

    const imageUrl = `/uploads/${req.file.filename}`

    try {
        const animal = await Animal.create({
            name,
            species,
            age,
            location,
            healthStatus,
            imageUrl
        })
        res.status(200).json(animal)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete an animal
const deleteAnimal = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such animal'})
    }

    const animal = await Animal.findOneAndDelete({ _id: id })

    if (!animal) {
        return res.status(404).json({ error: 'No such animal' })
    }

    res.status(200).json(animal)
}

// update an animal
const updateAnimal = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such animal'})
    }

    const animal = await Animal.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!animal) {
        return res.status(404).json({ error: 'No such animal' })
    }

    res.status(200).json(animal)
}

module.exports = {
    createAnimal,
    getAnimals,
    getAnimal,
    deleteAnimal,
    updateAnimal
}