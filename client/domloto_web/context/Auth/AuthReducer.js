import lscache from "lscache";

import {
  LOGIN_EXITOSO,
  OBTENER_USUARIO,
  REGISTRO_EXITOSO,
  CERRAR_SESION,
  LOGIN_ERROR,
  REGISTRO_ERROR,
  INICIANDO_CONSULTA,
  FINALIZANDO_CONSULTA,
} from "../../types";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_EXITOSO:
    case REGISTRO_EXITOSO: //Se guarda token en el LocalStorage
      lscache.set("token", action.payload.token, 2);
      console.log('LOGIN_EXITOSO');
      console.log('REGISTRO_EXITOSO');
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

    case INICIANDO_CONSULTA:
      return {
        ...state,
        cargando: true,
      };

    case FINALIZANDO_CONSULTA:
      return {
        ...state,
        cargando: false,
      };

    case CERRAR_SESION:
    case LOGIN_ERROR: //Realizan la mismo operacion, en caso de que haya un error reiniciar el token
    case REGISTRO_ERROR:
      lscache.remove("token");
      console.log('REGISTRO_ERROR');
      
      return {
        ...state,
        token: null,
        usuario: null, //Cuando se cierre sesion el usuario tiene que volver a null
        autenticado: null,
        mensaje: action.payload, //se maneta con el authState
        cargando: false,
      };

    case OBTENER_USUARIO:
      console.log('OBTENER_USUARIO: ', action.payload.data);
    return {
      ...state,
      autenticado: true,
      idUsuario: action.payload.data.idUsuario,
      usuario: action.payload.data.usuario,
      nombre: action.payload.data.nombre,
      tipoUsuario: action.payload.data.tipoUsuario,
      cargando: false,
    }
    default:
      return state;
  }
};

export default reducer;
