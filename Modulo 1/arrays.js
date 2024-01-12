const notas = [10, 6.5, 8, 7.5]

notas.push(9) // adiciona no final do array
notas.pop() // remove do final do array
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(media)

// dividindo o array usando o slice ( não altera o array principal )
const alunos =['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

// podemso alterar o array, removendo uma quantidade de elementos e colocando um no lugar com o splice()
alunos.splice(1,2,'Rodrigo')

const sala1 = alunos.slice(0, alunos.length / 2)

console.log(sala1)

// para concatenar array, podemos utilizar o concat()

// for of
let somaNotas = 0
for (let nota of notas){
    somaNotas += nota
}

const mediaN = somaNotas / notas.length
console.log(mediaN)

// for each

notas.forEach(function (nota){
    somaNotas += nota
})

// map serve para reescrever os elementos de um array

const notasAtualizadas = notas.map(nota => nota + 1 >= 10 ? 10 : nota + 1)

console.log(notasAtualizadas)

const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva']

const nomeAtualizado = nomes.map(nome => nome.toLocaleUpperCase())

console.log(nomeAtualizado)

// filtrando elementos
const alunos2 = ['Ana', 'Marcos', 'Maria', 'Mauro']
const medias = [7,4.5,7,7.5]

const reprovados = alunos2.filter((_, i) =>{
    return medias[i] >= 7
})

console.log(reprovados)

// Somando elementos do array com reduce

const salaJS = [7,8,8,7,10,6.5,4,10,7]
const salaJava = [6,5,8,9,5,6]
const salaPython = [7,3.5,8,9.5]

function mediaGeral(notaSala){
    const somaNota = notaSala.reduce((acc, nota) => acc + nota, 0)
    const media = somaNota / notaSala.length
    return media
}

console.log(`A media da salaJS é ${mediaGeral(salaJS)}`)
console.log(`A media da salaJava é ${mediaGeral(salaJava)}`)
console.log(`A media da salPython é ${mediaGeral(salaPython)}`)

// Copiando Arrays

const grades = [7,7,8,9]

const newGrades = [...grades, 10]

console.log(grades)
console.log(newGrades)


// Removendo os elementos repetidos

const names =["Ana", "Clara", "Maria", "Maria", "João", "João", "João"]

const updatedNames = [...new Set(names)]

console.log(updatedNames)