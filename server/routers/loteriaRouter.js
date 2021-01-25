const router = require('express').Router();

const { checkToken } = require('../auth/token_validation');
const loteria = require('../controllers/loteriaController');

router.get('/lottery', checkToken, loteria.getJuegosDisponibles);
// router.get('/user', checkToken, loteria.Hola);

module.exports = router;