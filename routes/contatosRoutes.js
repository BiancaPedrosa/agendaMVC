const express = require('express');
const router = express.Router();
const contatosController = require('../controllers/contatosController');

router.get('/', contatosController.renderContatosPage);

router.post('/contatos', contatosController.criarContato);

module.exports = router;