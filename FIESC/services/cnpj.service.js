// importa o arquivo requisicoesAPI.js.
import { requestAPIGetInformations } from './requestsAPI.js'

// define uma função que irá receber uma query como parâmetro e imprimir na tela a mensagem.
async function getCnpj(cnpj){
    try {
        // faz o request mandando os digitos sem caracteres especiais.
        const result = await requestAPIGetInformations(cnpj);

        return result
    } catch(error){
        console.error('Error in getCnpj', error);
        throw error;
    }

}

// exporta a função getCnpj.
export default { getCnpj }