const Player = require('../models/Player');

// GET svi igrači
exports.getAllPlayers = async (req, res) => {
    try {
        const players = await Player.findAll();
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST dodavanje igrača
exports.addPlayer = async (req, res) => {
    try {
        const player = await Player.create(req.body);
        res.status(201).json(player);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// PUT ažuriranje igrača
exports.updatePlayer = async (req, res) => {
    try {
        const player = await Player.update(req.body, { where: { id: req.params.id } });
        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE brisanje igrača
exports.deletePlayer = async (req, res) => {
    try {
        await Player.destroy({ where: { id: req.params.id } });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};