import express from "express";
import conectaNaBase from './dbConnect.js'

const conexao = await conectaNaBase()

conexao.on('error', (erro) => console.error('Erro de conexão', erro))
conexao.once('open', () => console.log("Conexão com o banco feita com sucesso!"))

const app = express()
app.use(express.json())


const books = [
    {
        id: 1,
        title: "Diário de um Banana"
    },
    {
        id: 2,
        title: "Harry Potter e o Enigma do Príncipe"
    }
]

function findBook(id){
    return books.findIndex( book =>{
        return book.id === Number(id);
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Node.js Course!")
})

app.get("/books", (req, res) => {
    res.status(200).json(books)
})

app.get('/books/:id', (req, res) => {
    const index = findBook(req.params.id);
    res.status(200).json(books[index]);
})

app.post("/books", (req, res) => {
    books.push(req.body);
    res.status(201).send("book registered successfully!");
})

app.put('/books/:id', (req, res) => {
    const index = findBook(req.params.id);
    books[index].title = req.body.title;
    res.status(200).json(books);
})
export default app;

