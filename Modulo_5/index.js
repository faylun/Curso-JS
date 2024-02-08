import fs from 'fs'

function extractLinks(text){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capture = [...text.matchAll(regex)]

    // itera sobre cada ocorrencia do texto
    const result = capture.map(capture => ({[capture[1]]: capture[2]}))
    return result.length !== 0 ? result : 'Não há links no arquivo.'
}

async function getFile(filePath){
    try{
        const text = await fs.promises.readFile(filePath, 'utf-8')
        console.log(extractLinks(text))
    } catch (erro){
        treatsError(erro)
    } finally{
        console.log('Operação concluída.')
    }
}

function treatsError(erro){
    throw new Error(erro.code, ' | ', 'Falta um arquivo para fazer a leitura.')
}

// -------------------------------------------------------------------------- //

export default getFile