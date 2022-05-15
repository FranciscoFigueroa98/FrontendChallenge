//AXIOS
import axios from 'axios';

//CREACIÓN DE INSTANCIA DE AXIOS APUNTANDO A LA API PÚBLICA DE RICK AND MORTY
const axiosClient = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    headers: {'X-Custom-Header': 'foobar'}
});

export default axiosClient;