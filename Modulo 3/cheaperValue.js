const books = require('./bookList')

let cheaper = 0

function cheaperBook(arrBooks, InicialPosition){
    for (let current = InicialPosition; current < arrBooks.length; current++){
        if (arrBooks[current].price < arrBooks[cheaper].price){
            cheaper = current
        }
    }
}

console.log(`O livro mais barato é ${books[cheaper].price} e o titulo é ${books[cheaper].title}`)