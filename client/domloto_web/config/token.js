import clientAxios from './axios';

const tokenAuth = token => {
    if(token) {
        clientAxios.defaults.he
        clientAxios.defaults.headers.common['authorization'] = token;
    } else {
        delete clientAxios.defaults.headers.common['authorization'];
    }
}
export default tokenAuth;