const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const requireAuth = require('../requireAuth');

// GET /api/user/me
router.get('/me', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('name email isAdmin');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch user info' });
  }
});

module.exports = router;
