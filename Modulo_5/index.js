import chalk from 'chalk';
import fs from 'fs';
import { url } from 'inspector';

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

async function extractLink(text){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capture = [...text.matchAll(regex)]
    const result = capture.map(cap => ({[cap[1]]: cap[2]}))
    const objectLink = result.map((objectLink) => Object.values(objectLink).join())
    console.log(await checkStatus(objectLink))
}

async function checkStatus(UrlList){
    const arrStatus = Promise.all(
        UrlList.map( async (url) => {
            const response = await fetch(url)
            return response.status;
        })
    )
    return arrStatus
}

async function getFile(filePath){
    try{
        const text = await fs.promises.readFile(filePath, 'utf-8')
        extractLink(text)
    } catch (erro){
        treatsError(erro)
    }
}

export default getFile