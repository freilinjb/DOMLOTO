const { getUsuarios } = require("../models/usuario.model");

module.exports = {
  getUsuarios: (req, res) => {
    getUsuarios((err, results) => {
      if (err) {
        return console.log(err);
      }
      return res.json({
        success: 1,
        data: results,
        msg: 'mensaje correcto'
      });
    });
  },
};
