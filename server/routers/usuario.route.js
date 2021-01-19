const { getUsuarios, registrarUsuario, login } = require('../controllers/usaurio.controller');
const router = require('express').Router();

router.get('/', getUsuarios);
router.post('/', registrarUsuario);
router.post('/login', login);

module.exports = router;