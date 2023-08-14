import axios from 'axios';

const apispf = axios.create({

    //baseURL: 'http://localhost/ApiSpf/public/get-clientes',
    baseURL: 'https://saulofrauches.com.br/apispf/public/get-clientes',

});

export default apispf;