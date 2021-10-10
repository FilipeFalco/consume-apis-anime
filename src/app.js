import axios from 'axios';
import csvjson from 'csvjson';
import fs from 'fs';

class Api {

    static async news() {
        const response = (await axios.get(`https://inshortsapi.vercel.app/news?category=science`)).data;
        Api.criarArquivo(response)
    }

    static async spaceFlight() {
        const response = (await axios.get(`https://api.spaceflightnewsapi.net/v3/articles?_limit=20`)).data
        Api.criarArquivo(response)
    }

    static async waifu() {
        const response = (await axios.get(`https://api.waifu.pics/sfw/neko`)).data
        Api.criarArquivo(response)
    }

    static criarArquivo(text) {
        fs.writeFile('arquivo.csv', csvjson.toCSV(text), (err) => {
            if (err) throw err;
            console.log('Arquivo criado com sucesso.');
        });
    }
}

//Api.waifu();
Api.news();
//Api.spaceFlight();