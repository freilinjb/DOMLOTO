const pool = require('../config/database');

module.exports = {
    getUsuarios: (callback) => {
        pool.query(`SELECT * FROM usuario`,[], (error, result, fields) => {
            return error ? callback(error) : callback(null, result);
        });
    },
    crearUsuario: (data, callback) => {
        console.log(data);
        pool.query(
            'CALL registroUsuario (?,?,?,?,?)',
            [
                data.usuario,
                data.clave,
                data.idTipo,
                data.correo,
                data.telefono
            ],
            (error, result, fields) => {
                return error ? callback(error) : callback(null, result);
            }
        )
    }
}