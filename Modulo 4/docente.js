import User from './user.js'

class Docent extends User{
    constructor(name, email, birth, role = 'admin', active = true){
        super(name, email, birth, role, active)
    }

    approvesStudent(name, course){
        return `O aluno ${name} foi aprovado no  curso ${course}.`
    }
}

const newDocent = new Docent('Marcos', 'm@.com', '2022-20-20')
console.log(newDocent.showInfo())
console.log(newDocent.approvesStudent('Juliana', 'JS'))