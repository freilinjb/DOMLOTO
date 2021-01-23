import { AUTENTICAR_USUARIO } from '../../types';

export default (state, action) => {
    switch(action.type) {
        case AUTENTICAR_USUARIO:
            return {
                ...state,
                token: action.payload
            }
        default: 
            return state;
    }
}