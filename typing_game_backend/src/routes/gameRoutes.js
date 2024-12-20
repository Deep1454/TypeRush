const express = require('express');
const { addGameRecord, getAllGames } = require('../controllers/gameController');
const router = express.Router();

router.post('/add', addGameRecord);
router.get('/', getAllGames);

module.exports = router;
