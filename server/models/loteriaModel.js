const pool = require('../config/database');

exports.getLoterias = async () => {
    try {
        const resultado = await pool.query(`SELECT * FROM juego`);

        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}