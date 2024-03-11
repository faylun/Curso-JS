import express from "express"
import books from './livroRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send('Curso de Node.js'))
    
    app.use(express.json(), books)
}

export default routes