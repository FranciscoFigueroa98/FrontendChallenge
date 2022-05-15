import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    headers: {'X-Custom-Header': 'foobar'}
});

export default axiosClient;