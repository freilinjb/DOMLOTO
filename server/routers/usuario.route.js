const { getUsuarios } = require('../controllers/usaurio.controller');
const router = require('express').Router();

router.get('/', getUsuarios);

module.exports = router;