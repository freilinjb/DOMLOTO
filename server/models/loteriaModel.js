const pool = require('../config/database');

exports.getLoterias = async () => {
    try {
        const resultado = await pool.query(`SELECT * FROM juego`);

        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}


exports.getJuegosDisponibles = async ( idUsuario, callback ) => {
    await pool.query(
        `SELECT v.idJuego, 
        v.juego, 
        v.urlLogo, 
        v.acronimo, 
        v.numeros, 
        v.loteria, 
        v.horario,
        v.idUsuario, 
        v.usuario 
        FROM juegos_v v
        WHERE v.idUsuario = ?`,
        [idUsuario],
        (error, resultados, fields) => {
            return error ? callback(error) : callback(null, resultados);
        }
    )
}