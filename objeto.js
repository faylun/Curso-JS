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