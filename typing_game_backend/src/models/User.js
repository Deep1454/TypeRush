const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true, // Ensures userName is required
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  highScore: { type: Number, default: 0 },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
