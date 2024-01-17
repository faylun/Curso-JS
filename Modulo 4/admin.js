import User from "./user.js"

class Admin extends User{
    constructor(name, email, birth, role = 'admin', active = true){
        super(name, email, birth, role, active)
    }
}

const newAdmin = new Admin('Julia', 'j@.com', '2021-10-10')
console.log(newAdmin)
console.log(newAdmin.showInfo())
