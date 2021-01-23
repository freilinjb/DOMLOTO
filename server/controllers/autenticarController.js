const {getUsuarios,crearUsuario,getUserByEmail} = require("../models/autenticarModel");
const aut = require("../models/autenticarModel");
const helpers = require('../helper');

const { verify } = require("jsonwebtoken");
const { compareSync, hashSync, genSaltSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

exports.registrarUsuario = (req, res) => {
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
};

exports.getUsuarios = (req, res) => {
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
};

exports.login = (req, res) => {
  const body = req.body;
  // console.log("body: ", body);
  getUserByEmail(body.usuario, (err, results) => {
    // console.log('results: ', results.clave);
    if (err) {
      console.log(err);
    }
    if (!results) {
      return res.json({
        success: 0,
        message: "Invalid email or password",
      });
    }
    const result = compareSync(body.clave, results.clave);
    // console.log("result: ", result);
    if (result) {
      results.password = undefined;
      const jsontoken = sign({ result: results }, "qw1234", {
        expiresIn: "1h",
      });
      const { idUsuario, usuario } = results;
      return res.json({
        success: 1,
        message: "login successfully",
        token: jsontoken,
        auth: true,
        data: {
          idUsuario,
          usuario,
        },
      });
    } else {
      // console.log('resulktado: ', jsontoken);
      return res.json({
        success: 0,
        message: "Invalid email or password",
      });
    }
  });
};

exports.getUsuarioAutenticado = (req, res) => {
  console.log("authorization: ",req.headers["authorization"]);
  console.log('helpers: ', helpers.getUserByToken(req.headers["authorization"]));
  // console.log("res: ",res);

  if (req.idUsuario !== null) {
    let token = req.headers["authorization"];
    token = token.replace("Bearer ", "");
    const idUsuario = verify(token, "qw1234").result.idUsuario;

    aut.getUsuarioAutenticado(idUsuario, (err, resultado) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          success: 0,
          message: "Error con la conexión",
        });
      }
      console.log("resultado: ", resultado);
      return res.status(200).json({
        success: 1,
        data: resultado,
      });
    });

  } else {
    return res.status(500).json({
      success: 0,
      data: "El ID de usuario autenticado es obligatorio",
    });
  }
};
