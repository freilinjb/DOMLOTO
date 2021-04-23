import axios from 'axios';

const clientAxios = axios.create({
    baseURL: 'http://192.168.0.104:4000'
});

export default clientAxios;