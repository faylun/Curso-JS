const books = require('./bookList')


function cheaperBook(arrBooks, InicialPosition){
    let cheaper = InicialPosition
    
    for (let current = InicialPosition; current < arrBooks.length; current++){
        if (arrBooks[current].price < arrBooks[cheaper].price){
            cheaper = current
        }
    }
    return cheaper
}

module.exports = cheaperBook