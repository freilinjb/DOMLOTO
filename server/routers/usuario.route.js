const { getUsuarios, login } = require('../controllers/usaurio.controller');
const { registrarUsuario } = require('../controllers/autenticarController');
const router = require('express').Router();

router.get('/', getUsuarios);
router.post('/', registrarUsuario);
router.post('/login', login);

module.exports = router;