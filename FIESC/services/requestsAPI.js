
// Importa o axios que irá fazer as requisições para as APIs.
import axios from 'axios';

// Importa funções do arquivo cnpj-utils.js.
import { bodyCnpjToken, bodyCnpjGetIdInformations, countYear, makingJsonProcess } from '../utils/cnpj-utils.js';

// Importa as variáveis que vai usar no body da requisição.
import { granType, id, secret, source, platform, search, query, key, url, urlGetId } from '../utils/variable-cnpj.js'

// Função que irá fazer a requisição para API GET TOKEN.
export async function requestAPICNPJToken(){

    // Cria uma constante date que irá receber o body da API TOKEN.
    const data = bodyCnpjToken(granType, id, secret)

    // Cria uma constante que irá receber os dados da requisição.
    const options = {

        // Passa o método da requisição como POST.
        method: 'POST',

        // Passa a URL da requisição.
        url: url,

        // passa o body da API TOKEN.
        data: data,
    };

    try{

        // Faz a requisição na API com axios.
        const response = await axios(options);

        // Recebe o TOKEN da API.
        const acessToken = response.data.access_token

        // Retorna esse TOKEN.
        return acessToken
    } catch(error){

        // Faz um LOG caso dê errado a requisição.
        console.error('Request API Error: ', error);
        throw error;
    }
}


// Cria uma função que irá fazer a requisição na API que irá pegar o ID.
export async function requestApiGetID(cnpj){

    // Cria uma constante que irá receber o BODY da requisição.
    const data = bodyCnpjGetIdInformations(source, platform, search, query, key, cnpj)
    
    // Cria uma constante que irá receber os dados da requisição.
    const options = {

        // Passa o método da requisição como POST.
        method: 'POST',

        // Passa a URL da requisição.
        url: urlGetId,

        // Passa os headers da requisição.
        headers: { 'Authorization': `Bearer ${await requestAPICNPJToken()}` },

        // Passa o body da requisição.
        data:data
    }

    try{

        // Faz a requisição na API para pegar o ID com axios.
        const response = await axios(options);

        // Atribui a uma constante a data da response da requisição.
        const id = response.data

        // Retorna o ID da response da requisição.
        return id.data.id

    } catch(error){

        // Faz um LOG caso dê errado a requisição.
        console.error('Request API Error: ', error);
        throw error;
    }

}

// Cria uma função que irá fazer a requisição na API que irá pegar as Informações do CNJS.
export async function requestAPIGetInformations(cnpj){

    // Cria uma constante que irá receber o BODY da requisição.
    const data = bodyCnpjGetIdInformations(source, platform, search, query, key, cnpj);

    // Cria uma constante que irá receber os dados da requisição.
    const options = {

        // Passa o método da requisição como POST.
        method: 'GET',

        // Passa a URL da requisição.
        url: `https://api.capturaweb.com.br/v1/request/${await requestApiGetID(cnpj)}`,
        

        // Passa os headers da requisição.
        headers: { 'Authorization': `Bearer ${await requestAPICNPJToken()}`},

        // Passa o body da requisição.
        data: data
    }

    try{
        
        // Retorna as informações presentes na função getInformations, passando como parâmetro o options.
        return getInformations(options);

    } catch(error){

        // Faz um LOG caso dê errado a requisição.
        console.error('Request API Error: ', error);
        throw error;
    }

}


/*

Cria uma função que irá receber os parâmetros passandos na API e que vai fazer a filtragem das datas, dos anos e 
dos cnjs. Ordenando cada um. Irá mandar esses dados para a função que vai fazer o json que irá ser retornado na API.

Cada requisição irá ter um timeout de 1 segundo e ele vai fazer, no máximo, 20 requisições. Caso deê erro, ele irá
sinalizar.

*/
async function getInformations(options){

    const cnjs = {};
    const dateCnj = [];
    const yearCnj = [];

    for (let i = 0; i < 20; i++){
        try{
            let response = await axios(options);
            
            if (response.data.requested.status === 'success'){

                const process = response.data.data;

                for (const cnj of process){

                    const year = cnj.properties.cnj.substring(11, 15).replaceAll('.','-');
                    dateCnj.push(cnj.properties.cnj.substring(11, 20).replaceAll('.','-'));
                    yearCnj.push(cnj.properties.cnj.substring(11, 15));

                    if (!cnjs[year]) {
                        cnjs[year] = []; // Inicializa um array se ainda não existir
                    }

                    cnjs[year].push(cnj.properties.cnj);
                }

                const sortYear = yearCnj.sort((a, b) => b - a);

                return makingJsonProcess(dateCnj, cnjs, countYear(sortYear));

            } else {


                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        
        } catch(error) {

            console.error('An error occurred during the API call:', error);
        }
    }

    return 'Maximum number of attempts reached.'
}