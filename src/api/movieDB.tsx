import axios from 'axios';
import config from '../../config';
const movieDb = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: config.API_KEY,
        lenguage: 'es-ES'
    }
});

export default movieDb;