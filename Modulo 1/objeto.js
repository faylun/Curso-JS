// objeto em javascript é composto por chave e valor

const objetoPessoa = {
    nome: "Edson",
    idade: 32,
    cpf: "111222333444",
    email: "andre@dominio.com"
}

    console.log(
        `O nome do cliente é ${objetoPessoa.nome} e ele possui ${objetoPessoa.idade} anos.`
    )

    console.log(` Os 3 primeiros digitos do CPF são ${objetoPessoa.cpf.substring(0,3)}`)

    console.log(`O nome do cliente é ${objetoPessoa['nome']} e ele possui ${objetoPessoa['idade']} anos`)

    const keys = ['nome', 'idade', 'cpf', 'email']

    keys.forEach((key) => console.log(`A chave ${key} tem o valor ${objetoPessoa[key]}`))

    console.log(objetoPessoa.telefone)

    objetoPessoa.telefone = '48 1122334455'

    console.log(objetoPessoa.telefone)
    
    objetoPessoa.nome = 'Gandalf' // alterar valor de um objeto

    console.log(objetoPessoa.nome)

    // caso queira deletar um valor do objeto, basta utilizar o delete objetoPessoa.nome

    // conseguimos guardar um array dentro de um objeto

    const objetoPessoa2 = {
        nome: "Edson",
        idade: 32,
        cpf: "111222333444",
        email: "andre@dominio.com",
        telefone: ["111122334455", "112233445566"]
    }

    console.log(objetoPessoa2.telefone)

    // Podemos guardar objetos dentro de objetos

    objetoPessoa2.endereco = {
        rua: "R.Limaozin Fofo",
        numero: 1200,
        apartamento: true,
        complemento: "ap 876"
    }

    console.log(objetoPessoa2.endereco)

    // podemos utilizar uma lista de objetos colocando eles dentro de uma lista e, com isso, podemos utilizar os métodos dessa lista
    const enderecos = [
        {
            rua: "R. Laranjinha",
            numero: 245,
            apartamento: true,
            complemento: "ap 432"
        }
    ]

    enderecos.push({
        rua: "R. NotFound",
        numero: 404,
        apartamento: false,
    })

    console.log(enderecos)

    const apenasAps = enderecos.filter((endereco) => endereco.apartamento === true) // filtrando e buscando apenas os objetos que são apartamentos

    console.log(apenasAps)

    // Podemos guardar funções dentro das propriedades dos objetos.

    const cliente2 = {
        nome: "henry",
        idade: 20,
        email: "henry@mail.com",
        telefone: ["112233445566", "223344556677"],
        saldo: 200,
        efetuaPagamento: function (valor) { 
            valor > this.saldo ? console.log('Saldo insuficiente.') : (this.saldo -= valor, console.log(`Pagamento efetuado com sucesso! Novo saldo: ${this.saldo}`))
            }
    }
    cliente2.endereco = [{
        rua: "R. ServerError",
        numero: 505,
        apartamento: false,
    }]

cliente2.efetuaPagamento(190)

// Podemos usar o for in para percorrer o objeto

for (let chave in cliente2){
    if (typeof cliente2[chave] !== 'object' && typeof cliente2[chave] !== 'function'){
        console.log(`A chave ${chave} tem o valor ${cliente2[chave]}`)
    }
}

// Podemos usar o Object.keys() para buscar as keys do objeto específico
// Podemos criar uma cópia do objeto suando Object.create()

const chavesDoObjeto = Object.keys(cliente2)
console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes('endereco')){
    console.error('Erro. O endereço precisa ser especificado.')
}

// espalhamento em objetos

function ligaParaCliente(telefone1, telefone2){
    console.log(`Ligando para ${telefone1}`)
    console.log(`Ligando para ${telefone2}`)
}

//ligaParaCliente(cliente2.telefone[0], cliente2.telefone[1])
ligaParaCliente(...cliente2.telefone)

/*

const encomenda = {
    destinatario: cliente2.nome,
    rua: cliente2.endereco[0].rua,
    numero: cliente2.endereco[0].numero
    apartamento: cliente2.endereco[0].apartamento
}

*/

const encomenda = {
    destinatario: cliente2.nome,
    ...cliente2.endereco[0]
}
console.log(encomenda)

// podemos utilizar o spread operator para uma melhor legibilidade e uma diminuição de código

const numerosPares = [2,4,6]
const numerosImpares = [1,3,5]

const numeros = [...numerosPares, ...numerosImpares]
console.log(numeros)
const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]
console.log(num1, num2, ...outrosNumeros)

const pessoa = {
    nome: 'Ju',
    idade: 24
}

const pessoaComTelefone = {
    ...pessoa, telefone: '1122334455'
}

console.log(pessoaComTelefone)

const {idade} = pessoa

console.log(idade)

function imprimeDados({nome, idade}){
    console.log(nome, idade)
}

imprimeDados(pessoa)