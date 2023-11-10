import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://reqres.in/api/',
    headers: {
        'accept': 'application/json'
    }
});

export default axiosInstance;