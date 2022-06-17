const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,

    exibirInfo: function () {
        console.log(`nome: ${this.nome}, email: ${this.email}`)
    }

}


const admin = {
    nome: "Mariana",
    email: "mariana@email.com",
    role: "admin",
    ativo: true,

    criarCurso: function () {
        console.log("Curso criado")
    }
}


// user.exibirInfo()

const exibir = function () {
    console.log(`nome: ${this.nome}, email: ${this.email}`)
}

// exibir()

// const exibirInfos = exibir.bind(user)

// exibirInfos()


Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfo()