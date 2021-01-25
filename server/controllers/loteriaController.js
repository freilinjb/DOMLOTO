const loteria = require('../models/loteriaModel');
const helper = require('../helper');

exports.Hola = function() {
    loteria.getLoterias();
}


exports.getJuegosDisponibles = (req, res) => {
    const idUsuario = helper.getUserByToken(req.headers['authorization']);
    loteria.getJuegosDisponibles(idUsuario, (err, resultados) => {
        if(err) {
            console.log('error: ', err);
            return res.status(500).json({
                success: 0,
                message: 'Error en la conexion'
            });
        } else {
            res.status(200).json({
                success: 1,
                data: resultados
            });
        }
    });
}