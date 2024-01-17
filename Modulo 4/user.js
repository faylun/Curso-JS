export default class User{
    constructor(name, email, birth, role, active = true){
        this.name = name
        this.email = email
        this.birth = birth
        this.role = role || 'estudante'
        this.active = active
    }

    showInfo(){
        return `${this.name} | ${this.email}`
    }
}

const newUser = new User('Kauan', 'k@.com', '20/20/20')
console.log(newUser.showInfo())