import axios from 'axios';

const baseURL = 'http://192.168.1.173:8080/api';

const productApi = axios.create({ baseURL });


export default productApi;
