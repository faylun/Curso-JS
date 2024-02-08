import getFile from './index.js';
import fs from 'fs'

const path = process.argv

function showList(result, identify = ''){
    console.log(identify, result)
}

async function processFile(path){
    
    try{
        fs.lstatSync(path[2])
    } catch (erro){
        if (erro.code === 'ENOENT'){
            console.log('Arquivo ou diretório inexistente.')
            return;
        }
    }

    if (fs.lstatSync(path[2]).isFile()){
        const result = await getFile(path[2])
        showList(result)
    } else if (fs.lstatSync(path[2]).isDirectory()){
        const files = await fs.promises.readdir(path[2])
        files.forEach(async (fileName) => {
            const list = await getFile(`${path[2]}/${fileName}`)
            showList(list, fileName)
        })
    }
}

processFile(path)