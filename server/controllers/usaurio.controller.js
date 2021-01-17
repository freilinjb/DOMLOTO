const { getUsuarios, crearUsuario } = require("../models/usuario.model");
const { sign, compareSync, hashSync, genSaltSync } = require('bcrypt');

module.exports = {
  registrarUsuario: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.clave = hashSync(body.clave, salt);
    crearUsuario(body, (err, result) => {
      if(err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: 'Error en la conexión',
        });
      }

      return res.status(200).json({
        success: 1,
        data: result
      });
    });
  },
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

  login: (req, res) => {
    const body = req.body;
    getUsuarioPorEmail(body.email, (err, result) => {
      return error ? console.log(err) : res.json({success: 0, data: 'Email o contraseña invelida'});
    });

    const resultado = compareSync(body.clave, result.clave);
    console.log('resultado: ', resultado);

    if(resultado) {
      resultado.clave = undefined;
      const jsontoken = sign({resultado: resultado}, 'qw1234',{
        expiresIn: '1h'
      });

      return res.json({
        success: 1,
        message: 'Login successfully',
        token: jsontoken,
        data: resultado
      });
    } else {
      return res.json({
        success: 0,
        data: 'Email o contraseña invalida'
      });
    }

    
  }
};
