function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfo = function () {
        return `${this.nome}, ${this.email}`
    }
}

function Admin(role) {
    User.call(this, "Leandro", "leandro@email.com")
    this.role = role || "estudante"
}

Admin.prototype = Object.create(User.prototype)
const novoUser = new Admin("admin")
console.log(novoUser.exibirInfo())
console.log(novoUser.role)