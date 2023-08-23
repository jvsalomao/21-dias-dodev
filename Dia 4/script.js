//Sistema jantar especial

let fome = prompt("Você está com fome? (S/N)");
let dinheiro = prompt("Você tem dinheiro? (S/N)");
let restaurante = prompt("O restaurante está aberto? (S/N");

if(fome === "N" || dinheiro === "N"){
    console.log("Hoje a janta será em casa.")
}else if(fome === "S" && dinheiro === "S" && restaurante === "N"){
    console.log("Peça um delivery!")
}else if(fome === "S" && dinheiro === "S" && restaurante === "S"){
    console.log("Hoje o jantar será no seu restaurante preferido!")
}

// Motorista
let nome = prompt("Insira seu nome: ");
let idade = parseInt(prompt("Insira sua idade: "));
let carteiraMotorista = prompt("Vc tem carteira de motorista? (S/N)");
let carro = prompt("Você tem carro? (S/N)");

if(idade < 18 || carteiraMotorista === "N"){
    console.log(nome + ", vc não pode dirigir")
}else if(idade >= 18 && carteiraMotorista === "S" && carro === "N"){
    console.log(nome + ", vc pode dirigir mas não tem carro")
}else if(idade >= 18 && carteiraMotorista === "S" && carro === "S"){
    console.log(nome + ", você é um piloto de fuga!")
}