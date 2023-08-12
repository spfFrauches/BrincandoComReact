import axios from 'axios';

const apispf = axios.create({

    //baseURL: 'https://api.github.com',
    baseURL: 'http://localhost/ApiSpf/public/get-clientes',

});

export default apispf;