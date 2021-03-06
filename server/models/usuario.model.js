const { genSaltSync, hashSync } = require('bcrypt');
const db = require('../config/database');

module.exports = {
    getUsuarios: (callback) => {
        db.connection.query(`SELECT * FROM usuario`,[], (error, result, fields) => {
            return error ? callback(error) : callback(null, result);
        });

    },
    crearUsuario: (data, callback) => {
        db.connection.query(
            'CALL registroUsuario (?,?,?,?,?,?,?,?)',
            [
                data.nombre,
                data.apellido,
                data.idSexo,
                data.usuario,
                data.clave,
                data.idTipoUsuario,
                data.correo,
                data.telefono
            ],
            (error, result, fields) => {
                console.log(error);
                return error ? callback(error) : callback(null, result);
            }
        );

    },

    getUserByEmail: (usuario, callback) => {
        // console.log('usuario: ', usuario);

        db.connection.query(
            `SELECT * FROM usuario_v uv WHERE uv.usuario = ? OR uv.correo = ?`,
            [usuario, usuario],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                // console.log('resultado: ', results);
                return callback(null, results[0]);
            }
        );
    }
}