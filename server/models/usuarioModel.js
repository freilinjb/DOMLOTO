const pool = require('../config/database');
const { verify } = require('jsonwebtoken');

exports.resgistrarEmpleado = (data, callback) => {
    pool.query(`CALL registrarEmpleados (?,?,?,?,?,?,?,?)`,
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

exports.getLoterias = (callback) => {
    pool.query();
}