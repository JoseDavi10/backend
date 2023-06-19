const clienteController = require('../controllers/clienteControle');

const express = require('express');
const router = express.Router();

router.post('/cliente', clienteController.createCliente);
router.get('/clientes', clienteController.findAllClientes);
router.get('/cliente/:id', clienteController.findCliente);
router.put('/cliente/:id', clienteController.updateCliente);
router.delete('/cliente/:id', clienteController.deleteCliente);

module.exports = router;