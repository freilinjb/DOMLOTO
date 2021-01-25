const loteria = require('../models/loteriaModel');
const helper = require('../helper');

exports.Hola = function() {
    loteria.getLoterias();
}


exports.getJuegosDisponibles = (req, res) => {
    const idUsuario = helper.getUserByToken(req.headers['authorization']);
    loteria.getJuegosDisponibles(idUsuario, (err, resultados) => {
        if(err) {
            console.log('error: ', err);
            return res.status(500).json({
                success: 0,
                message: 'Error en la conexion'
            });
        } else {
            let loterias = [];
            let juegos = [];
            resultados.forEach((element) => {
                loterias.push(element.loteria);
                // console.log('loter: ', element.urlLogo);
            });

            const unique = (value, index, self) => {
                return self.indexOf(value) === index
            }
            loterias = loterias.filter(unique);

            let temp = [];
            loterias.forEach((loteria) => {
                resultados.forEach((key)=> {
                    // console.log('key: ', key);
                    if(loteria == key.loteria) {
                        temp.push({
                            idJuego: key.idJuego,
                            juego: key.idJujuegoego,
                            urlLogo: key.urlLogo,
                            acronimo: key.acronimo,
                            numeros: key.numeros,
                            loteria: key.loteria,
                            horario: key.horario,
                            idUsuario: key.idUsuario,
                            usuario: key.usuario
                        
                        });
                    }
                });

                if(temp.length > 0) {
                    juegos.push({loteria: loteria, juegos: temp});
                    temp = [];
                }
            });
            temp = [];
            resultados = [];
            loterias = [];
            
            console.log('juegos: ', juegos);

            // console.log('resultado: ', loterias);
            // console.log('resultados: ', resultados[0].juego);
            res.status(200).json({
                success: 1,
                data: juegos
            });
        }
    });
}