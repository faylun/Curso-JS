const reading = require('./cliente.json') // importa o arquivo json

console.log(reading)
console.log(typeof reading)

const clientInString = JSON.stringify(reading)

console.log(clientInString)
console.log(typeof clientInString)

const stringInObject = JSON.parse(clientInString)
console.log(stringInObject)
console.log(typeof stringInObject)