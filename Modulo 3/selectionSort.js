const books = require('./bookList')
const lowerValue = require('./cheaperValue')

for (let current = 0; current < books.length; current++){
    let lower = lowerValue(books, current)
    
    let currentBook = books[current]
    let cheaperBook = books[lower]

    books[current] = cheaperBook
    books[lower] = currentBook
}

console.log(books)