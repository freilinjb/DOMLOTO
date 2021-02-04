const router = require('express').Router();
const { checkToken } = require('../auth/token_validation');

const  { body, validationResult } = require('express-validator');

const ticketController = require('../controllers/ticketController');

router.get('/ticket/:id', checkToken, ticketController.ticket);

module.exports = router;