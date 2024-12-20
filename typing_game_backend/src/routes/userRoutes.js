const express = require('express');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Update high score
router.put('/update-score', authMiddleware, async (req, res) => {
  const { score } = req.body;

  try {
    const user = await User.findById(req.user);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update high score if the new score is higher
    if (score > user.highScore) {
      user.highScore = score;
      await user.save();
    }

    res.status(200).json({ message: 'High score updated', highScore: user.highScore });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});
router.get('/profile', authMiddleware, async (req, res) => {
    try {
      // Find the user based on the ID from the JWT token
      const user = await User.findById(req.user.id).select('-password'); // Exclude the password field
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Return the user profile details (excluding password)
      res.status(200).json({
        username: user.username,
        email: user.email,
        highScore: user.highScore
      });
    } catch (err) {
      console.error('Error fetching user profile:', err); // Log error for debugging
      res.status(500).json({ message: 'Server Error', error: err.message });
    }
  });

module.exports = router;
