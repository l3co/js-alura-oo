export default class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || "estudante";
        this.ativo = ativo
    }

    exibirInfo() {
        return `${this.nome}, ${this.email}`
    }
}

// const novoUser = new User("leandro", "leandro@jaya.tech", "2012/02/02")
// console.log(novoUser)
// console.log(novoUser.exibirInfo())
// console.log(User.prototype.isPrototypeOf(novoUser))