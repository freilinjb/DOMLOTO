import React, {useReducer} from 'react';

import UsuarioReducer from './usuarioReducer';
import UsuarioContext from './usuarioContext';

import {AUTENTICAR_USUARIO} from '../../types';

const UsuarioState = (props) => {
  const initialState = {
    token: null,
    nombre: null,
    apellido: null,
    correo: null,
    usuario: null,
    telefono: null,
    auth: false,
    cargando: true,
  };

  const [state, dispatch] = useReducer(UsuarioReducer, initialState);

  const autenticarUsuario = (token) => {
    dispatch({
      type: AUTENTICAR_USUARIO,
      payload: token,
    });
  };


    return (
      <UsuarioContext.Provider
        value={{
          token: state.token,
          nombre: state.nombre,
          apellido: state.apellido,
          correo: state.correo,
          usuario: state.usuario,
          telefono: state.telefono,
          auth: state.auth,
          autenticarUsuario,
        }}>
        {props.children}
      </UsuarioContext.Provider>
    );
};

export default UsuarioState;
