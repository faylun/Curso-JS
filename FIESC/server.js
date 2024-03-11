import app from './app.js'

const PORT = 3333
IP = 'collector.digitro.com.br'

app.listen(PORT, IP, () => console.log(`Server listening on PORT ${PORT}...`))