const pool = require('../config/database');
// const { verify } = require('jsonwebtoken');


exports.registrarEmpleado = (data, callback) => {

    // const idUsuario = verify(data.token,"qw1234").result.idUsuario;
    // console.log('idUsuario: ', idUsuario);

    pool.query(`CALL registrarEmpleado (?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
        data.idUsuario,
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
    (error, result, fields)  => {
        console.log(error);
        return error ? callback(error) : callback(null, result);
    });
}

exports.getEmpleados = (idUsuario, callback) => {
    pool.query(`SELECT * FROM empleados_v`,
    [idUsuario],(error, result, fields) => {
        return error ? callback(error) : callback(null, result);
    });
}

exports.sexo = (callback) => {
    console.log('hola');
}

// exports.getLoterias = (callback) => {
//     pool.query();
// }