const router = require('express').Router();
const { checkToken } = require('../auth/token_validation');

const useAutenticarRouter = require('../routers/autenticarRouter');
const usuario = require('../routers/usuarioRouter');
const loteria = require('../routers/loteriaRouter');
const ticket = require('../routers/ticketRouter');

// const { Hola } = require('../controllers/loteriaController');

router.use(useAutenticarRouter);
router.use(usuario);
router.use(loteria);
router.use(ticket);


module.exports = router;