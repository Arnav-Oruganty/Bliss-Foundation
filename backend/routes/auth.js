const express = require('express');
const router = express.Router();

const {
    getUsers,
    signUp,
    login
} = require('../controllers/authController');

//Get all signed up users
router.get('/signup', getUsers);

// Get all logged in users
router.get('/login', (req, res) => {
    res.status(200).json({ message: 'Login route' });
});

// Signup Route
router.post('/signup', signUp);

// Login Route
router.post('/login', login);

module.exports = router;