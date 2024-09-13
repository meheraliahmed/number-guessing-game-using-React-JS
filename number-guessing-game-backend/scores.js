const express = require('express');
const User = require('./models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Get user's high score
router.get('/highscore', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    res.json({ highScore: user.highScore });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update user's high score
router.post('/highscore', authenticateToken, async (req, res) => {
  const { highScore } = req.body;

  try {
    const user = await User.findById(req.user.userId);
    if (highScore > user.highScore) {
      user.highScore = highScore;
      await user.save();
    }
    res.json({ highScore: user.highScore });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
