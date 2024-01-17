const user = {
    init: function(name, email){
        this.name = name
        this.email = email
    },

    showInfo: function(){
        return this.name
    }
}

const newUser = Object.create(user)
newUser.init('Juliana', 'j@j.com')
console.log(newUser.showInfo())