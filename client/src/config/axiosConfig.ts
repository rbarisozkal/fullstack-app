import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api', // our base url for api
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
