const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// get all signed up users
const getUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password')
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Signup function
const signUp = async (req,res) => {
    const { name, email, password, isAdmin } = req.body

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' })
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10)

        // Create new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            isAdmin: isAdmin || false
        })
        await user.save()

        res.status(201).json({
            message: 'User created successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin
            }
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Login function
const login = async (req, res) => {
    const { email, password } = req.body

    try {
        // Check if user exists
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' })
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid email or password' })
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1d' }
        )

        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin
            },
            token
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getUsers,
    signUp,
    login
}