const proprietarioController = require('../controllers/proprietarioControle');

const express = require('express');
const router = express.Router();

router.post('/proprietario', proprietarioController.createProprietario);
router.get('/proprietarios', proprietarioController.findAllProprietarios);
router.get('/proprietario/:id', proprietarioController.findProprietario);
router.put('/proprietario/:id', proprietarioController.updateProprietario);
router.delete('/proprietario/:id', proprietarioController.deleteProprietario);

module.exports = router;