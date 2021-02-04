const db = require('../config/database');

exports.ticke = (ticket, callback) => {
    db.connection.query(
        `SELECT t.idTicket AS ticket,
            DATE(t.fecha) AS fecha,
            time(t.fecha) AS hora,
            l.loteria loteria,
            COALESCE(j.urlLogo, l.urlLogo) AS urlLogo, 
            j.nombre juego, d.numero,
            d.monto, e.estado 
        FROM ticket t 
            INNER JOIN detalleticket d ON t.idTicket = d.idTicket
            INNER JOIN juego j ON j.idJuego = d.idJuego
            INNER JOIN loteria l ON j.idLoteria = l.idLoteria
            INNER JOIN estado e ON t.idEstado = e.idEstado
        WHERE t.idTicket = ?`,
        [ticket],
        (error, resultado, fields) => {
            console.log('error');
            return error ? callback(error) : callback(null, resultado);
        }
    );
}