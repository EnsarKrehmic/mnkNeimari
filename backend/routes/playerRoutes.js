const express = require('express');
const { getAllPlayers, addPlayer, updatePlayer, deletePlayer } = require('../controllers/playerController');

const router = express.Router();

router.get('/', getAllPlayers);
router.post('/', addPlayer);
router.put('/:id', updatePlayer);
router.delete('/:id', deletePlayer);

module.exports = router;