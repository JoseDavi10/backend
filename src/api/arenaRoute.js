const arenaController = require('../controllers/arenaControle');

const express = require('express');
const router = express.Router();

router.post('/arena', arenaController.createArena);
router.get('/arenas', arenaController.findAllArenas);
router.get('/arena/:id', arenaController.findArena);
router.put('/arena/:id', arenaController.updateArena);
router.delete('/arena/:id', arenaController.deleteArena);

module.exports = router;