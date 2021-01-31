const loteria = require('../models/loteriaModel');
const helper = require('../helper');

exports.Hola = function() {
    loteria.getLoterias();
}

exports.registrarLoteria = (req, res) => {
    const { idUsuario } = req.body;
    console.log('respuesta: ', req.body);
    if(idUsuario === '') {
        return res.status(500).json({
            message: 1,
            message: "usuario no puede estar vacio",
        });
    }

    // const numeros = req.body.numeros[0].numeros;

    // const hola = numeros.split('-').filter((c, i, a)=>a.indexOf(c) !== i).length;
    // const longitud = numeros.split("-").length;
    let tipoJuego = null;

    const jugadas = req.body.numeros;
    const numJugados = [];
    console.log('numeros: ',  req.body.numeros);
    if(jugadas.length > 0) {
        jugadas.forEach((jugada, index) => {
            // console.log('jugada: ', jugada);

            const { idJuego, numeros, monto } = jugada;

            if(numeros === '' || idJuego === '' || monto === '') {
                console.log('ejecuto breack inicio');
                return res.status(500).json({
                    message: 1,
                    message: "usuario vacio",
                });
            }

            let tipoJugada = numeros.split('-').length;

            switch (tipoJugada) {
                case 1: tipoJuego = "PALE";
                    break;
        
                case 2: tipoJuego = "SUPER PALE";
                    break;
                
                case 3: tipoJuego = "TRIPLETA";
                    break;
            
                default: 
                    break;
            }

            numJugados.push({idJuego, numeros, tipoJuego, monto});
        });

        const datos = [];
        datos.push({idUsuario, jugadas: numJugados});

        loteria.registrarTicket(datos, (err, resultado) => {
            if(err) {
                console.log('error: ', err);
                res.status(500).json({
                    success: 0,
                    message: 'Error con la conexión'
                });
            }

            console.log('resultados: ', datos);

            return res.status(200).json({
                success: 1,
                message: "Registro realizado exitosamente",
                datos: resultado
            });
        });

        
        
    } else {
        return res.status(500).json({
            message: 1,
            message: "No debe enviar arreglo vacios",
        });
    }
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
            loterias.forEach((loteria, index) => {
                resultados.forEach((key)=> {
                    // console.log('key: ', key);
                    if(loteria == key.loteria) {
                        temp.push({
                            id: key.idJuego,
                            juego: key.idJujuegoego,
                            urlLogo: key.urlLogo,
                            acronimo: key.acronimo,
                            name: key.juego,
                            numeros: key.numeros,
                            loteria: key.loteria,
                            horario: key.horario,
                            idUsuario: key.idUsuario,
                            usuario: key.usuario
                        
                        });
                    }
                });

                if(temp.length > 0) {
                    juegos.push({name:loteria, id: (index+1), juegos: temp});
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