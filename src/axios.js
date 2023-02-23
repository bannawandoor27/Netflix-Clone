import axios from 'axios';
import {baseUrl} from './/constants/constatnts'
const instance = axios.create({
    baseURL: baseUrl,
});

export default instance;