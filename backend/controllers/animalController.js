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
  const { name, species, age, location, healthStatus = 'Healthy' } = req.body;

  console.log('Received body:', req.body)
  console.log('Received file:', req.file)

  if (!req.file) {
    return res.status(400).json({ error: 'Image is required' });
  }

  try {
    const imageUrl = req.file.path;

    const animal = await Animal.create({
      name,
      species,
      age,
      location,
      healthStatus,
      imageUrl,
    });

    res.status(200).json(animal);
  } catch (error) {
    console.error('Error during createAnimal:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


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