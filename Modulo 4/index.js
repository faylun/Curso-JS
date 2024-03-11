import User from "./User.js";
import Docent from "./Docent.js";
import Admin from "./Admin.js";

const newAdmin = new Admin('Rodrigo', 'r@r.com','2020-01-01')
console.log(newAdmin.showInfo())
newAdmin.name = 'Jose'
console.log(newAdmin.showInfo())