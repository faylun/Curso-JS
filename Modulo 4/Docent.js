import User from "./User.js";

export default class Docent extends User{
    constructor(name, email, birth, role = 'admin', active = true){
        super(name, email, birth, role, active)
    }

    studentApproves(student, course){
        return ` Estudante ${student} aprovado com ${course} sucesso.`
    }
}