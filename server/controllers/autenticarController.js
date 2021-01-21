const {
  getUsuarios,
  crearUsuario,
  getUserByEmail,
  getTelephone,
  getEmail
} = require("../models/autenticarModel");
const { verify } = require('jsonwebtoken');
const { compareSync, hashSync, genSaltSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
    
  registrarUsuario: (req, res) => {

    const body = req.body;
    const salt = genSaltSync(10);
    body.clave = hashSync(body.clave, salt);
    
    crearUsuario(body, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Error en la conexión",
        });
      }

      return res.status(200).json({
        success: 1,
        data: result,
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
        msg: "mensaje correcto",
      });
    });
  },

  getEmail2: (req, res) => {
    console.log(req.body);
    let token = req.headers['authorization'];
    token = token.replace("Bearer ", "");
    console.log('TOKEN: ', verify(token,"qw1234"));
    console.log('token: ', token.replace("Bearer ", ""));
    getEmail(req.body.correo,(err, results) => {
      if (err) {
        return console.log(err);
      }
      console.log('result: ', results);

      return res.json({
        success: 1,
        data: results,
        msg: "mensaje correcto",
      });
    });
  },



  login: (req, res) => {
    const body = req.body;
    console.log("body: ", body);
    getUserByEmail(body.usuario, (err, results) => {
      // console.log('results: ', results.clave);
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          data: "Invalid email or password",
        });
      }
      const result = compareSync(body.clave, results.clave);
      console.log("result: ", result);
      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, "qw1234", {
          expiresIn: "1h",
        });
        const { idUsuario, usuario, nombre, apellido, correo, telefono } = results;
        return res.json({
          success: 1,
          message: "login successfully",
          token: jsontoken,
          auth: true,
          data: {
            idUsuario,
            usuario,
            correo,
            nombre,
            apellido,
            telefono
          },
        });
      } else {
        // console.log('resulktado: ', jsontoken);

        return res.json({
          success: 0,
          data: "Invalid email or password",
        });
      }
    });
  },
};
