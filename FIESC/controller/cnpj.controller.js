import ServiceCnpj from '../services/cnpj.service.js'
import { extrairDigito } from '../utils/cnpj-utils.js'
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, '../utils/contentJson.json');

async function getCnpj(number, res){

    // pega o valor passado no parâmetro ' numero '.
    const formatedNumber = await getDigit(number);

    // mostra um log do que foi feito na rota.
    console.log(`INFO: Request in the route '/fiesc/cnpj/busca': ${formatedNumber}.`) 

    try{

        // Verifica se o CNPJ passado possui 14 digitos.
        if (formatedNumber.length !== 14){

            throw new Error('Enter a valid CNPJ.')

        }else {

            // mostra um log do que foi feito na rota.
            console.log("INFO: Starting the query in the external api.")

            // manda a resposta do request para a função getCnpj.
            const result = await ServiceCnpj.getCnpj(formatedNumber)
            // Manda para a rota o resultado. Ou seja, faz aparecer na rota.
            return result
            //res.send(result);
        }
    }catch (erro){

        // Manda para a função getCpf a mensagem de erro como parâmetro.
        console.log(`ERRO ${erro.message}`)

    }
}

// Cria uma função que irá formatar o número passado como parâmetro e retornar ele.
export async function getDigit(number){

    // Cria uma constante que chama a função para tirar os caracteres especiais.
    const formatedDigit = extrairDigito(number) 

    // Retorna a constante.
    return formatedDigit;
}

// exporta a função getCnpj.
export default { getCnpj }