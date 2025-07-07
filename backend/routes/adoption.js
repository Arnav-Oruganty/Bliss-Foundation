const express = require('express');
const router = express.Router();
const Adoption = require('../models/adoptionModel');

// GET all adoptions
router.get('/', async (req, res) => {
  try {
    const adoptions = await Adoption.find().sort({ createdAt: -1 });
    res.json(adoptions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { name, email, phone, message, animalName } = req.body;

  try {
    // Save adoption interest to DB
    await Adoption.create({ name, email, phone, message, animalName });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;