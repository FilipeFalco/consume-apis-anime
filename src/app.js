import axios from 'axios';

class Api {

    static anime(nome){
        axios.defaults.headers.common['header1'] = { Authorization: `Bearer ${}`}
        const response = axios.get(`${process.env.MYANIMELIST_BASE_URL}/anime?q=${nome}`);
        console.log('response: ', response);
    }
}

Api.anime('myhero');