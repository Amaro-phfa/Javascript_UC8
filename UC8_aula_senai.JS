let idade = 16

let QuantidadeConvidados = 99

if(idade >=18) {
    QuantidadeConvidados = QuantidadeConvidados + 1
    if(QuantidadeConvidados > 100) {
        console.log("Cadastro não é permitido por ter excedido o limite")
    }
    else {
        console.log("Cadastro permitido")
    }
}
else {
    console.log("Cadastro não é permitido pela idade")
}
