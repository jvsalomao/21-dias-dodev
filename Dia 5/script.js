// Calculadora

let numeroUm = Number(prompt("Insira um número: "))
let numeroDois = Number(prompt("Insira outro número: "))
let operacao = Number(prompt("Escolha a operação desejada: " 
+ "\n1 = +; \n2 = -; \n3 = *; \n4 = /"))

switch(operacao){
    case 1:
        console.log(numeroUm + " + " + numeroDois + " = " + (numeroUm + numeroDois))
        break
    case 2:
        console.log(numeroUm + " - " + numeroDois + " = " + (numeroUm - numeroDois))
        break
    case 3:
        console.log(numeroUm + " * " + numeroDois + " = " + (numeroUm * numeroDois))
        break
    case 4:
        console.log(numeroUm + " / " + numeroDois + " = " + (numeroUm / numeroDois))
        break
}

// Do Dev Thru


