import axios from 'axios';

const apisave = axios.create({

    baseURL: 'https://saulofrauches.com.br/apispf/public/cliente',

});

export default apisave;