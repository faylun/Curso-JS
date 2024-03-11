const user = {
    name: "Juliana",
    email: "j@j.com",
    birth: "2021/01/01",
    role: "admin",
    active: true,
    showInfo: function(){
        console.log(this.name, this.email)
    }    
}

const admin = {
    name: "Mariana",
    email: "m@m.com",
    role: "estudante",
    active: "admin",
    createCourse(){
        console.log('curso criado!')
    }
}

const show = function(){
    console.log(this.name, this.email)
}    

const showName = show.bind(user)
showName()
show()
user.showInfo()

console.log('------------------')

Object.setPrototypeOf(admin, user)
admin.createCourse()
admin.showInfo()