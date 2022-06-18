import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const usuario = new User("Mariana", "m@m.com", "2021-01-01");
console.log("Usuário comum", usuario.nome);

const admin = new Admin("Pedro borge", "p@b.com", "1956-07-01");
console.log("Admin ", admin.nome);

const docente = new Docente("Rita de Cassia", "r@c.com", "1986-04-23");
console.log("Docente  ", docente.nome);


