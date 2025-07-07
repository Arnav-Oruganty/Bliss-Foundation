const mongoose = require('mongoose');

const adoptionSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  animalName: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Adoption', adoptionSchema);