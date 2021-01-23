const router = require('express').Router();
const { checkToken } = require('../auth/token_validation');

const useAutenticarRouter = require('../routers/autenticarRouter');
const usuario = require('../routers/usuarioRouter');

const { Hola } = require('../controllers/loteriaController');

router.use(useAutenticarRouter);
router.use(usuario);


module.exports = router;