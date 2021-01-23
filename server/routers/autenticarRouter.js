const router = require('express').Router();
const { checkToken } = require('../auth/token_validation');

const autenticar = require('../controllers/autenticarController');

router.post('/auth', autenticar.login);
router.get('/auth',checkToken, autenticar.getUsuarioAutenticado);

module.exports = router;