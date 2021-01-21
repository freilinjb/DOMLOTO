const { registrarUsuario, login } = require('../controllers/autenticarController');
const { getUsuarios } = require('../controllers/usaurio.controller');

const { Hola } = require('../controllers/loteriaController');

const { checkToken } = require('../auth/token_validation');

const router = require('express').Router();

router.post('/user/add', registrarUsuario);
router.post('/user/login', login);



router.get('/users', checkToken, getUsuarios);


module.exports = router;