const ticketModel = require('../models/ticketModel');
const  { body, validationResult } = require('express-validator');

const helpers = require('../helper');


exports.ticket = (req, res) => {
    // const { ticket } = req.body;
    const ticket = req.params.id;
    console.log('ticket: ', ticket);

    ticketModel.ticke(ticket, (err, resultado) => {
        // console.log('ticket: ', resultado);

        let ticket = [];

        if(resultado.length > 0) {
            let ticketTemporal = [];

            resultado.forEach((value) => {
                ticketTemporal.push({
                    urlLoto: value.urlLoto,
                    loteria: value.loteria,
                    juego: value.juego,
                    numero: value.numero,
                    monto: value.monto,
                    estado: value.estado
                });
            });
            ticket.push({ticket: resultado[0].ticket,fecha: resultado[0].fecha, hora: resultado[0].hora, detalle: ticketTemporal});

            // ticket.push({detalle: ticketTemporal});
            ticketTemporal = [];

            console.log('ticket: ', ticket)

        }

        if(err) {
            console.log('error: ', err);
        } else {
            return res.status(200).json({
                success: 1,
                data: ticket[0]
            });
        }
    });
}