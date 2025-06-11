const express = require('express');
const router = express.Router();

const {
    getUsers,
    signUp,
    login
} = require('../controllers/authController');

//Get all signed up users
router.get('/signup', getUsers);

// Signup Route
router.post('/signup', signUp);

// Login Route
router.post('/login', login);

module.exports = router;