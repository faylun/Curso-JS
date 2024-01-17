import chalk from 'chalk';
import { trace } from 'console';
import fs from 'fs';

function treatsError(erro){
    throw new Error(chalk.red(erro.code, ' | Não há arquivo para fazer a leitura.'))
}
/*
function getFile(pathFile){
    fs.promises
      .readFile(pathFile, 'utf-8')
      .then( text => console.log(text))
      .catch(treatsError)
} */

const text1 = 'A interface File provê informações sobre arquivos e permite ao JavaScript  a acessar seu conteúdo. São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.). [Teste de retorno 400](https://httpstat.us/404). [gatinho salsicha](http://gatinhosalsicha.com.br/)'

function extractLink(text){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capture = regex.exec(text)
    console.log(capture)
}

async function getFile(filePath){
    try{
        const text = await fs.promises.readFile(filePath, 'utf-8')
        console.log(text)
    } catch (erro){
        treatsError(erro)
    }
}

//getFile('C:/Users/Kauan/Documents/PROJETOS/javascript/functions/Curso-JS/Modulo_5/texto.md');

extractLink(text1)