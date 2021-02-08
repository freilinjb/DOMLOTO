import React, { useReducer, useEffect } from "react";
import lscache from "lscache";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/token";

import {
  LOGIN_ERROR,
  LOGIN_EXITOSO,
  OBTENER_USUARIO,
  INICIANDO_CONSULTA,
  FINALIZANDO_CONSULTA
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: lscache.get("token") ? lscache.get("token") : null,
    autenticado: null,
    usuario: null,
    idUsuario: null,
    nombre: null,
    cargando: false,
    mensaje: null,
    tipoUsuario: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const usuarioAutenticado = async () => {
    localStorage.setItem('token', "asdfasdf");
    const token = lscache.get("token");

    // console.log('token:', lscache.get("token"));
    if (token) {
      tokenAuth(`Bearer ${token}`);
      // tokenAuth(token);
    } else {
      dispatch({
        type: LOGIN_ERROR,
      });
      return;
    }

    dispatch({
      type: INICIANDO_CONSULTA,
    });

    await clienteAxios.get("/api/auth/")
      .then((response) => {
        console.log("usuarioAutenticado: ", response);

        dispatch({
          type: OBTENER_USUARIO,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error: ", error);

        dispatch({
          type: LOGIN_ERROR,
          payload: "Ahh ocurrido un error",
        });
      })
      .finally(() => {
        dispatch({
          type: FINALIZANDO_CONSULTA,
        });
      });
  };

  const iniciarSesion = async (usuario, clave) => {
    console.log("datosState: ", usuario);
    console.log("clave: ", clave);
    await clienteAxios
      .post("/api/auth/", { usuario, clave })
      .then( async (respuesta) => {
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

      // await usuarioAutenticado();
  };

  useEffect(() => {
    console.log('hola asdfasdf');
    if(state.autenticado === true) {
      usuarioAutenticado();
    }
  },[state.autenticado]);

  useEffect(() => {
    if(state.token && state.autenticado == null) {
      // state.cargando = false;
      state.cargando = true;
      usuarioAutenticado();
    }

    if(state.token === null) {
      state.cargando = false;
    }
    console.log('asdf');
    state.cargando = false;

  },[]);

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
        tipoUsuario: state.tipoUsuario,
        saludar,
        iniciarSesion,
        usuarioAutenticado
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
