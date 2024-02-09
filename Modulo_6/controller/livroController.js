import book from "../models/Livro.js";

class BookController {

    static async listBooks(req, res){
        try{
            const bookList = await book.find({})
            res.status(200).json(bookList)

        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição.`})
        }
    }

    static async listBooksById(req, res){
        try{
            const id = req.params.id
            const bookList = await book.findById(id)
            res.status(200).json(bookList)

        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição do livro.`})
        }
    }

    static async registerBook(req, res){
        try{
            const newBook = await book.create(req.body)
            res.status(201).json( {message: "criado com sucesso", livro: newBook} )
        }catch (erro) {
            res.status(500).json( {message: `${erro.message} - falha ao cadastrar o livro.`} )
        }
    }

    static async updateBook(req, res){
        try{
            const id = req.params.id
            const bookList = await book.findByIdAndUpdate(id, req.body)
            res.status(200).json(message `livro atualizado.`)
        }catch (erro) {
            res.status(500).json( {message: `${erro.message} - falha ao atualizar o livro.`} )
        }
    }

    static async deleteBook(req, res){
        try{
            const id = req.params.id
            const bookList = await book.findByIdAndDelete(id)
            res.status(200).json(message `livro deletado.`)
        }catch (erro) {
            res.status(500).json( {message: `${erro.message} - falha ao deletar o livro.`} )
        }
    }
}

export default BookController