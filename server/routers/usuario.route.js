const { getUsuarios, registrarUsuario } = require('../controllers/usaurio.controller');
const router = require('express').Router();

router.get('/', getUsuarios);
router.post('/', registrarUsuario);

module.exports = router;