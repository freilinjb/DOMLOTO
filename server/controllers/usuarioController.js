const usuario = require('../models/usuarioModel');

exports.registrarEmpleado = (req, res) => {
    let token = req.headers['authorization'];
    token = token.replace("Bearer ", "");
    // console.log('idUsuario: ', verify(token,"qw1234").result.idUsuario);
    req.body.token = token;
    const body = req.body;

    // console.log('Registrando empleados: ', req.body);

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