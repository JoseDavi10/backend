const empresaController = require('../controllers/empresaControle');

const express = require('express');
const router = express.Router();

router.post('/empresa', empresaController.createEmpresa);
router.get('/empresas', empresaController.findAllEmpresas);
router.get('/empresa/:id', empresaController.findEmpresa);
router.put('/empresa/:id', empresaController.updateEmpresa);
router.delete('/empresa/:id', empresaController.deleteEmpresa);

module.exports = router;