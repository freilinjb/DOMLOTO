import React, { useReducer } from "react";
import lscache from "lscache";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/token";

import { LOGIN_ERROR, LOGIN_EXITOSO } from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: lscache.get("token") ? lscache.get("token") : null,
    autenticado: null,
    usuario: null,
    idUsuario: null,
    nombre: null,
    cargando: false,
    mensaje: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const iniciarSesion = async (usuario, clave) => {
    console.log("datosState: ", usuario);
    console.log("clave: ", clave);
    await clienteAxios
      .post("/api/auth/", { usuario, clave })
      .then((respuesta) => {
        console.log("respuesta: ", respuesta);
        dispatch({
          type: LOGIN_EXITOSO,
          payload: respuesta.data,
        });
      })
      .catch((error) => {
        console.log("error: ", error);
        dispatch({
          type: LOGIN_ERROR,
        });
      });
  };

  const saludar = (nombre) => console.log(`Hola ${nombre} como estas`);
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        idUsuario: state.idUsuario,
        nombre: state.nombre,
        cargando: state.cargando,
        mensaje: state.mensaje,
        saludar,
        iniciarSesion,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
