// auth.js
const express = require('express');
const router = express.Router();
const User = require('./models/User'); // Adjust path if necessary
const bcrypt = require('bcryptjs');

// Register route
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Registration failed' });
  }
});

module.exports = router;
