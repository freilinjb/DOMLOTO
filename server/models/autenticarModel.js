const { genSaltSync, hashSync } = require('bcrypt');
const pool = require('../config/database');

module.exports = {
    getUsuarios: (callback) => {
        pool.query(`SELECT * FROM usuario`,[], (error, result, fields) => {
            return error ? callback(error) : callback(null, result);
        });
    },
    crearUsuario: (data, callback) => {

        pool.query(
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
        pool.query(
            `SELECT * FROM usuario_v uv WHERE uv.usuario = ? OR uv.correo = ?`,
            [usuario, usuario],
            (error, results, fields) => {
                if(error) {
                    callback(error);
                }
                // console.log('usuario: ', results);
                return callback(null, results[0]);
            }
        );
    },
    getTelephone: (telephone, callback) => {
        validado = pool.query(
            `SELECT * FROM telefono t WHERE t.telefono = ?`,
            [telephone],
            (error, result, fields) => {
                return  error ? callback(error) : callback(null, result);
            }
        );
    },
    getEmail: (correo, callback) => {
        console.log(telefono);

        pool.query(
            `SELECT * FROM correo c WHERE c.correo = ?`,
            [correo],
            (error, result, fields) => {
                return  error ? callback(error) : callback(null, result);
            }
        );
    }
}