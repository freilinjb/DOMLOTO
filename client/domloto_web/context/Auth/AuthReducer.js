import lscache from "lscache";

import {
  LOGIN_EXITOSO,
  OBTENER_USUARIO,
  REGISTRO_EXITOSO,
  CERRAR_SESION,
  LOGIN_ERROR,
  REGISTRO_ERROR,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_EXITOSO:
    case REGISTRO_EXITOSO: //Se guarda token en el LocalStorage
      lscache.set(action.payload.token, 2);
      // localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        autenticado: true,
        token: action.payload.token,
        idUsuario: action.payload.data.idUsuario,
        usuario: action.payload.data.usuario,
        mensaje: action.payload.message, //Mostrar mensaje de adventencia manejado con el state
        cargando: false,
      };
    case CERRAR_SESION:
    case LOGIN_ERROR: //Realizan la mismo operacion, en caso de que haya un error reiniciar el token
    case REGISTRO_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        usuario: null, //Cuando se cierre sesion el usuario tiene que volver a null
        autenticado: null,
        mensaje: action.payload, //se maneta con el authState
        cargando: false,
      };
    default:
      return state;
  }
};
