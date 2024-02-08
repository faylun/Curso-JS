const clients = require('./clientes.json')

function findClient(list, key, value){
    return list.find((item) => item[key].includes(value))
}

//console.log(findClient(clients, "nome", "Kirby"))

//console.log(findClient(clients, "telefone", "1918820860"))

function filterApartamentWithoutComplement(clients){
    return clients.filter((client) =>{ 
        return (client.endereco.apartamento && !client.endereco.hasOwnProperty("complemento")) 
    })
}

//console.log(filterApartamentWithoutComplement(clients))

function sortClients(clients, property){
    return clients.sort((a, b) => {
        if (a[property] < b[property]){
            return -1
        } else if (a[property] > b[property]){
            return 1
        }
        return 0
    })
}

console.log(sortClients(clients, 'nome'))