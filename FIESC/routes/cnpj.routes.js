// importa a biblioteca ' express '.
import express from 'express';

// importa o arquivo ' cnpj.controller.js '.
import CnpjController from '../controller/cnpj.controller.js'
import { getHtml } from '../utils/cnpj-utils.js'

// atribui a uma constante a objeto Router da biblioteca express para conseguir usar as funções.
const router = express.Router();

// define uma rota ' /formatedJson ' para fazer requisições GET. Pega o parâmetro passado na url e manda para o CnpjController.
router.get('/formatedjson/:cnpj', async (req, res) => {
    try{
      const cnjJson = await CnpjController.getCnpj(req.params.cnpj, res);

      const jsonText = JSON.stringify(cnjJson, null, 2);

      const htmlContent = getHtml(req.params.cnpj, jsonText)

      res.status(200).send(htmlContent);

    } catch (error){
      res.status(500).send({ error: 'Internal server error.' })
    }
  });


// define uma rota ' /busca ' para fazer requisições GET. Pega o parâmetro passado na url e manda para o CnpjController.
router.get('/busca/:cnpj', async (req, res) => {
  try{
      const cnjJson = await CnpjController.getCnpj(req.params.cnpj, res);
      res.status(200).send(cnjJson);
      console.log(cnjJson);
  } catch(error){
    res.status(500).send({ error: 'Internal server error.' })
  }
});



// exporta a constante router.
export default router