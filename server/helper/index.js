
const { verify } = require('jsonwebtoken');
const pool = require('../config/database');


exports.getUserByToken = function (token) {
    // let token = req.headers['authorization'];
    token = token.replace("Bearer ", "");
    const idUsuario = verify(token,"qw1234").result.idUsuario;
    console.log('usuario: ', idUsuario);
    return idUsuario;
}


///Iniciando las transacciones

/**
 * Envoltorio de conveniencia para la conexión de la base de datos en una transacción
 */
exports.inTransaction = (pool, body, callback) => {
    console.log('pool: ', pool);

    this.withConnection(pool, (db, done) => {
        db.beginTransaction( (err) => {
            if (err) return done(err);

            body(db, finished)
        })

        // Commit or rollback transaction, then proxy callback
        function finished(err) {
            var context = this;
            var args = arguments;

            if (err) {
                if (err == 'rollback') {
                    args[0] = err = null;
                }
                db.rollback(function() { done.apply(context, args) });
            } else {
                db.commit(function(err) {
                    args[0] = err;
                    done.apply(context, args)
                })
            }
        }
    }, callback)
}

/**
 * Contenedor de conveniencia para la conexión de la base de datos desde el grupo
 */
exports.withConnection = (pool, body, callback) => {
    pool.getConnection((err, db) => {
        if (err) return callback(err);

        body(db, finished);

        function finished() {
            db.release();
            callback.apply(this, arguments);
        }
    })
}
