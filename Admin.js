import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    criarCurso(curso, vagas) {
        return `Curso ${curso} criado com sucesso com ${vagas} disponiveis`
    }
}

const admin = new Admin("leandro", "leandro@jaya.tech", "2012/02/02")
console.log(admin)
console.log(admin.criarCurso("nodeJS", 99))