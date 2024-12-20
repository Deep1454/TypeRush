const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  score: { type: Number, required: true },
  time: { type: Number, required: true },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
