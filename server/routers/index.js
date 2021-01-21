const { checkToken } = require('../auth/token_validation');

const { registrarUsuario, login, getEmail2 } = require('../controllers/autenticarController');
const { getUsuarios } = require('../controllers/usaurio.controller');

const { Hola } = require('../controllers/loteriaController');


const router = require('express').Router();

router.post('/user/add', registrarUsuario);
router.post('/user/login', login);



router.get('/users', checkToken, getUsuarios);
router.get('/hola', getEmail2);


module.exports = router;