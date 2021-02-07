
const { verify } = require('jsonwebtoken');
const pool = require('../config/database');


exports.getUserByToken = function (token) {
    // let token = req.headers['authorization'];
    token = token.replace("Bearer ", "");
    const idUsuario = verify(token,"qw1234").result.idUsuario;
    console.log('usuario: ', idUsuario);
    return idUsuario;
}