import axios from 'axios';

const apidelete = axios.create({

    baseURL: 'https://saulofrauches.com.br/apispf/public/cliente/update',

});

export default apidelete;