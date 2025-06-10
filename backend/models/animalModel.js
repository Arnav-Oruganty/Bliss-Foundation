const mongoose = require('mongoose')

const Schema = mongoose.Schema

const animalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 0
    },
    healthStatus: {
        type: String,
        required: true,
        enum: ['Healthy', 'Sick', 'Injured'],
        default: 'Healthy'
    },
    location: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Animal', animalSchema)
