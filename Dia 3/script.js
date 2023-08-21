// Sisteminha IMC do recrutador(a) amado(a)
let nome = prompt("Insira o seu nome: ");
let idade = parseInt(prompt("Insira sua idade: "));
let altura = parseFloat(prompt("Insira sua altura: "));
let peso = parseInt(prompt("Insira seu peso: "))

let anoNascimento = 2023 - idade;
let imc = peso / (altura * peso);

console.log("Olá, " + nome + ", vc tem " + idade + " anos, nasceu em " + anoNascimento + ", tem " + 
altura + " de altura, pesa " + peso + "kg e seu IMC é de " + imc + "kg/m².")
