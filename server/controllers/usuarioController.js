const usuario = require('../models/usuarioModel');
const { verify } = require('jsonwebtoken');

function getIdUsuario(token) {
    // let token = req.headers['authorization'];
    token = token.replace("Bearer ", "");
    const idUsuario = verify(token,"qw1234").result.idUsuario;
    console.log('usuario: ', idUsuario);
    return idUsuario;
}

exports.registrarEmpleado = (req, res) => {
    let token = req.headers['authorization'];
    token = token.replace("Bearer ", "");
    req.body.idUsuario = verify(token,"qw1234").result.idUsuario;

    const body = req.body;

    usuario.registrarEmpleado(body, (err, resultado) => {
        if(err) {
            console.log(err);
            res.status(500).json({
                success: 0,
                message: 'Error con la conexión'
            });
        }
        console.log('Resultado: ', resultado);

        return res.status(200).json({
            success: 1,
            data: resultado,
        });
    })
}

exports.getEmpleados = (req, res) => {
    let token = req.headers['authorization'];
    const idUsuario = getIdUsuario(req.headers['authorization']);
    usuario.getEmpleados(idUsuario, (err, resultado) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Error en la conexión",
            });
        }

        return res.status(200).json({
            success: 1,
            data: resultado,
        });
    });
    // console.log('getIdUsuario: ', );
}