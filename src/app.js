import axios from 'axios';
import jsonToCsv from 'json2csv';

class Api {

    static async news() {
        const response = (await axios.get(`https://inshortsapi.vercel.app/news?category=science`)).data;
        console.log('response news: ', response);
    }

    static async spaceFlight() {
        const response = (await axios.get(`https://api.spaceflightnewsapi.net/v3/articles?_limit=20`)).data
        console.log('response spaceFlight: ', response)
    }

    static async waifu() {
        const response = (await axios.get(`https://api.waifu.pics/sfw/neko`)).data
        
        console.log('response waifu: ', json2csv(response))
    }

    static json2csv(json) {
        let propriedades = [];
        let primeiraLinha = JSON.stringify(json[0]).split(",")
        for (item of primeiraLinha) {
            let nomes = item.split('"');
            propriedades.push(nomes[1]);
        }

        var prototipo_csv = [];
        prototipo_csv[0] = '';
        for (prop of propriedades) {
            prototipo_csv[0] += '"' + prop + '",';
        }

        for (var i = 0; i < json.length; i++) {
            prototipo_csv[i + 1] = '';
            for (prop of propriedades) {
                prototipo_csv[i + 1] += '"' + json[i][prop] + '",';
            }
        }

        var csv_result = '';
        for (item of prototipo_csv) {
            csv_result += item + "\n";
        }

        return csv_result;
    }
}

Api.waifu();