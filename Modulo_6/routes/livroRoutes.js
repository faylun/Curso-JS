import express from "express";
import livroController from '../controller/livroController.js'

const routes = express.Router()

routes.get('/livros', livroController.listBooks)
routes.get('/livros', livroController.listBooksById)
routes.get('/livros', livroController.registerBook)
routes.get('/livros', livroController.updateBook)
routes.get('/livros', livroController.deleteBook)

export default routes