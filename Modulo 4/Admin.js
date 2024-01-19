import User from "./User.js";

export default class Admin extends User{
    constructor(name, email, role = 'admin', active = true){
        super(name, email, role, active)
    }

    createCourse(courseName, vacancy){
        return `Curso de ${courseName} criado com ${vacancy} vagas.`
    }
}