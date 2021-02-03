const { pool, connection } = require("../config/database");
const db = require("../config/database");

exports.getLoterias = async () => {
  try {
    const resultado = await db.connection.query(`SELECT * FROM juego`);

    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
};

exports.getJuegosDisponibles = async (idUsuario, callback) => {
  await db.connection.query(
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
  );
};

exports.getTickets = async (idUsuario, callback) => {
  await db.connection.query(
    `SELECT * FROM tickets_v tv WHERE tv.idUsuario = ?`,
    [idUsuario],(error, resultados, fields) => {
      return error ? callback(error) : callback(null, resultados);
    }
  );
}

exports.getTicketsResumen = async (idUsuario, callback) => {
  await db.connection.query(
    `SELECT ticket,idUsuario, fecha,hora, cantidad,TRIM(estado) AS estado FROM ticket_v v WHERE v.idUsuario = ?`,
    [idUsuario],(error, resultados, fields) => {
      return error ? callback(error) : callback(null, resultados);
    }
  );
}

exports.registrarTicket = async (datos, callback) => {
  const idUsuario = datos[0].idUsuario;

  db.connection.beginTransaction(function (err) {
    if (err) {
      throw err;
    }

    db.connection.query(
      "INSERT INTO ticket(idUsuario) VALUES( ? )",
      [idUsuario],
      function (error, result, fields) {
        const { insertId } = result;
        if (error) {
          return connection.rollback(() => {
            throw error;
          });
        }

        datos[0].jugadas.forEach((jugada, index) => {
          // console.log(`jugada: ${index}`, jugada);
          const { idJuego, numeros, tipoJuego, monto } = jugada;
            // console.log('juego: ',  jugada);
          const ticket = result.insertId;
          console.log(`INSERT ${result.insertId} added`);

          connection.query(
            "INSERT INTO detalleticket(idTicket, idJuego, tipoJugada, numero, monto) VALUES(?,?,?,?,?)",
            [ticket, idJuego, tipoJuego, numeros, monto],
            (error, result, fields) => {
              if (error) {
                return db.connection.rollback(() => {
                    return callback(error);
                });
              }

              connection.commit((err) => {
                if (err) {
                  return connection.rollback(() => {
                    return callback(error); 
                  });
                }
                //Cuando ser inserta correctamente
                // return callback(null, result);
              });
            }
          );

          

        });


        //Cuando ser inserta correctamente
        connection.query(
          'SELECT * FROM ticket_v WHERE ticket = ?',[insertId],(error, result, fields) => {
            return error ? callback(error) : callback(null, result);
          }
        );
        // return callback(null, result);
      }
    );
  });
};
