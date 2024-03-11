export default class User{
    #name
    #email
    #birth
    #role
    #active
    constructor(name, email, birth, role, active = true){
        this.#name = name
        this.#email = email
        this.#birth = birth
        this.#role = role || 'estudante'
        this.#active = active
    }

    get name(){
        return this.#name
    }

    get email(){
        return this.#email
    }

    get birth(){
        return this.#birth
    }

    get role(){
        return this.#role
    }

    get active(){
        return this.#active
    }

    set name(newName){
        this.#name = newName
    }

    showInfo(){
        return `${this.name}, ${this.email}, ${this.birth}, ${this.role}, ${this.active}`
    }
}