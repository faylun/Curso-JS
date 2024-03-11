import express from 'express'
import cnpjRoutes from './routes/cnpj.routes.js'

// Faz a constante app receber um objeto de express para conseguir utilizar as funções.
const app = express()

// transforma o corpo das requisições em JSON.
app.use(express.json())

app.use('/fiesc', cnpjRoutes);

// cria uma rota padrão que o caminho vai ser ' /fiesc/cnpj '.
app.use('/fiesc/cnpj', cnpjRoutes)

// exporta a constante app.
export default app