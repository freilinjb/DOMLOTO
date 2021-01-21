const { getLoterias  } = require('../models/loteriaModel');

exports.Hola = function() {
    getLoterias();
}