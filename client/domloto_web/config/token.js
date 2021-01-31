import clientAxios from './axios';

const tokenAuth = token => {
    if(token) {
        clientAxios.defaults.headers.common['authorization'] = token;
    } else {
        delete clientAxios.defaults.headers.common['authorization'];
    }
}
export default tokenAuth;