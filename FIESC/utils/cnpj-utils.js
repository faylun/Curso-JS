
// Função que retorna o body para a requisição que irá trazer o Bearer Token.
export function bodyCnpjToken(grantTypeToken, idToken, secretToken){

    // json utilizado no body da API.
    return {
        "grant_type": grantTypeToken,
        "id": idToken,
        "secret": secretToken
    };
}

// Função que retorna o body para a requisição que irá trazer o Request ID da API.
export function bodyCnpjGetIdInformations(source, platform, search, query, key, value){

    // json utilizado no body da API.
    return {
        "source": source,
        "platform": platform,
        "search": search, 
        "query": query, 
        "param": {
            "key": key,
            "value": value
        }
    }
}

/* 

Função que retorna um Objeto com a quantidade de ocorrência de cada ano dentro do Array de Anos. 
Por exemplo: 2020 aparece 11 vezes.

*/
export function countYear(arrayYear){

    // Inicia um Objeto vazio.
    const contagem = {}

    /* 
    
    Faz um looping em cada ano do Array de ano e verifica se o ano exite. Caso exista, pega o valor e atribui + 1.
    Caso não exista, atribui 0 + 1

    */

    arrayYear.forEach(year => {
        contagem[year] = (contagem[year] || 0) + 1;
    });

    // Retorna o objeto de contagem.
    return contagem

}

/* 

Função que retorna o json utilizado na API.

*/

export function makingJsonProcess(dates, cnjs, occurence){

    // Inicializa um objeto vazio dentro de data.
    const process = {data: {}}

    // Faz um laço de repetição na occurence, que volta um objeto com o ano e as ocorrências naquele ano.
    for (const occ in occurence){

        // Faz um laço de repetição nas datas.
        for (const date of dates){

            // Verifica se o ano dentro de cada data é igual a data da ocorrência.
            if (date.substring(0,4) === occ){

                /* 

                Cria um objeto com cada ano nas ocorrências e dentro vai criar chaves de ocorrência no ano, 
                data completa e um objeto vazio de cnjs.

                */
                process.data[occ] = {
                    'occurences_in_year': occurence[occ],
                    'date': date,
                    'cnjs': {}
                };
            }

        }
        
        // Faz um laço de repetição nos cjs ( um objeto com o ano e o cnj ).
        for (const cnjYear in cnjs){

            /* 
            
            Verifica se a data das ocorrências é igual a data nos cnjs. Se for, ele coloca os valores dos cnjs
             dentro do objeto.

            */
            if (occ === cnjYear){
                process.data[occ].cnjs = cnjs[cnjYear]
            }
        }
    }
    
    // retorna a constante process.
    return process
}

export function extrairDigito(digito){
    // regex criado para buscar todos os digitos na palavra ( sem caracteres especiais ).
    const regex = /\d/g;

    // utiliza o metódo match para encontrar correspondências de acordo com o regex.
    const numeroArray = digito.match(regex)

    /* 
       if ternário onde se o numeroArray for verdadeiro, irá retornar o número sem espaços e sem caracteres especiais.
       Caso contrário, irá retornar ' N/I '.
    */
    return numeroArray ? numeroArray.join('') : 'N/I';
}


export function getHtml(cnpj, jsonText){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Formated JSON</title>
        <style>
            /* Optional styling for the preformatted text */
            pre {
                font-family: monospace; /* Set a monospaced font for code */
                white-space: pre-wrap; /* Preserve whitespace and line breaks */
                background-color: #eee; /* Light background for better readability */
                padding: 10px;
            }
    
            body {
                background-color: #222;
                color: #ddd;
            }
            
            pre {
                font-family: monospace; 
                white-space: pre-wrap; 
                background-color: #333; 
                color: #eee; 
                padding: 10px;
            }
    
            h2 {
                color: #fff;
            }
        </style>
    
    </head>
    
    <body>
    
        <div>
            <h2>
                JSON FORMATADO
            </h2>
            <p>
                <ul>
                    <li>
                        Segue o <b>JSON</b> formatado para uma melhor visualização no cnpj " ${cnpj} ":
                    </li>
                </ul>
    
                <pre id="json-content">${jsonText}</pre>
    
            </p>
        </div>
    </body>
    </html>`
}