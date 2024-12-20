const Game = require('../models/Game');

const addGameRecord = async (req, res) => {
  const { userName, score, time } = req.body;
  try {
    const newGame = new Game({ userName, score, time });
    await newGame.save();
    res.status(201).json(newGame);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add game record' });
  }
};

const getAllGames = async (req, res) => {
  try {
    const games = await Game.find().sort({ score: -1 });
    res.status(200).json(games);
  } catch (err) {
    res.status(400).json({ error: 'Failed to fetch game records' });
  }
};

module.exports = { addGameRecord, getAllGames };
