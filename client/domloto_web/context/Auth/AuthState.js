import React,{ useReducer} from 'react';

import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

import { LOGIN_ERROR } from '../../types';

const AuthState = props => {

    const initialState = {
        mensaje: null
    }

    
    const [state, dispatch] = useReducer(AuthReducer,initialState);

    const saludar =(nombre) => console.log(`Hola ${nombre} como estas`);

    return (
        <AuthContext.Provider
            value={{
                saludar
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;