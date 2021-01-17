const pool = require('../config/database');

module.exports = {
    getUsuarios: (callback) => {
        pool.query(`SELECT * FROM usuario`,[], (error, result, fields) => {
            return error ? callback(error) : callback(null, result);
        });
    }
}