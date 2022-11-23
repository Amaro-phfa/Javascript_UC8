let numeroDeAlunos = 10

let contador = 0
while (contador <= numeroDeAlunos) {

    if(contador == 0) {
        console.log("o numero atual eh zero")
    }
    else if (contador % 2 == 1) {
        console.log("O numero " + contador + " eh impar")
    }
    else {
        console.log(`O numero ${contador} eh par`)
    }
    contador++
}

let nomeDeAlunos = ["Caique", "Pedro", "Billy"]

for(let nome of nomeDeAlunos) {
    console.log(`O nome do aluno é ${nome}`)
}