const pool = require('../config/database');
const { verify } = require('jsonwebtoken');


exports.registrarEmpleado = (data, callback) => {

    console.log('resultado: ', data);
    console.log('idUsuario: ', verify(data.token,"qw1234").result.idUsuario);

    pool.query(`CALL registrarEmpleado (?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
        data.idUsuarioMaestro,
        data.nombre,
        data.apellido,
        data.idSexo,
        data.usuario,
        data.clave,
        data.idTipoUsuario,
        data.correo,
        data.telefono,
        data.idProvincia,
        data.idCiudad,
        data.direccion
    ],
    (error, result, fiellds)  => {
        console.log(error);
        return error ? callback(error) : callback(null, result);
    });
}

// exports.getLoterias = (callback) => {
//     pool.query();
// }