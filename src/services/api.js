import axios from 'axios';
//BASE DA URL:https://api.themoviedb.org/3/
// URL:/movie/now_playing?api_key=66496090dc6c1dd6abdead3020a955ae&language=pt-BR

const api = axios.create({

    baseURL:'https://api.themoviedb.org/3/'

});

export default api;
