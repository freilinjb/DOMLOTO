const router = require('express').Router();

const { checkToken } = require('../auth/token_validation');
const usuario = require('../controllers/usuarioController');

router.post('/', checkToken, usuario.registrarEmpleado);

module.exports = router;

