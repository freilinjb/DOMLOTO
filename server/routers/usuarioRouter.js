const router = require('express').Router();


const { checkToken } = require('../auth/token_validation');
const usuario = require('../controllers/usuarioController');

router.post('/employee', checkToken, usuario.registrarEmpleado);
router.post('/user', checkToken, usuario.registrarEmpleado);
router.get('/user', checkToken, usuario.getEmpleados);

module.exports = router;