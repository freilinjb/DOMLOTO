import axios from 'axios';

const clientAxios = axios.create({
    baseURL: 'http://192.168.0.102:4000'
});

export default clientAxios;