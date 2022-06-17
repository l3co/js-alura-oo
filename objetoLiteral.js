const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "admin",
    ativo: true,

    exibirInfo: function () {
        console.log(`nome: ${this.nome}, email: ${this.email}`)
    }

}


user.exibirInfo()