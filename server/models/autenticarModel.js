const { checkToken } = require("../auth/token_validation");
const { genSaltSync, hashSync } = require("bcrypt");
const pool = require("../config/database");

exports.getUsuarios = (callback) => {
  pool.query(`SELECT * FROM usuario`, [], (error, result, fields) => {
    return error ? callback(error) : callback(null, result);
  });
}

exports.crearUsuario = (data, callback) => {
  pool.query(
    "CALL registroUsuario (?,?,?,?,?,?,?,?)",
    [
      data.nombre,
      data.apellido,
      data.idSexo,
      data.usuario,
      data.clave,
      data.idTipoUsuario,
      data.correo,
      data.telefono,
    ],
    (error, result, fields) => {
      console.log(error);
      return error ? callback(error) : callback(null, result);
    }
  );
};

exports.getUserByEmail = (usuario, callback) => {
  console.log("usuario: ", usuario);
  pool.query(
    `SELECT * FROM usuario_v uv WHERE uv.usuario = ? OR uv.correo = ?`,
    [usuario, usuario],
    (error, results, fields) => {
      if (error) {
        callback(error);
      }
    //   console.log("usuario: ", results);
      return callback(null, results[0]);
    }
  );
};

exports.getTelephone = (telephone, callback) => {
  validado = pool.query(
    `SELECT * FROM telefono t WHERE t.telefono = ?`,
    [telephone],
    (error, result, fields) => {
      return error ? callback(error) : callback(null, result);
    }
  );
};

exports.getEmail = async (correo, callback) => {
  console.log("correo: ", correo);
  pool.query(
    `SELECT idUsuario,usuario,nombre, apellido, sexo, tipoUsuario, correo, telefono FROM usuario_v uv WHERE uv.usuario = ? OR uv.correo = ?`,
    [correo, correo],
    (error, results, fields) => {
      if (error) {
        callback(error);
      }
      // console.log('usuario: ', results);
      return callback(null, results[0]);
    }
  );
};

exports.getUsuarioAutenticado = async (idUsuario, callback) => {

  await pool.query(
    `SELECT * FROM usuario_v uv WHERE uv.idUsuario = ?`,
    [idUsuario],
    (error, result, fields) => {
      return error ? callback(error) : callback(null, result);
    }
  );
};
