// let idade = Number(prompt("Digite a sua idade: "))

// if (idade <= 12){
//     alert ("Criança")
// }
// else if (idade <=18){
//     alert("Adolescente")
// }
// else if (idade <= 60){
//  alert ("ADULTERIO")
// }

// else{
//     alert("TU É VEIO KKKKKKK")
// }


// let compra = Number(prompt("Digite o valor da sua compra (SEM VALOR QUEBRADO CARAI): "))

// if (compra <=100){
//  alert ("O valor da sua compra é " + compra + "$ Reais")
// }
// else if (compra <=299){
//     let novaCompra = compra * 0.90;
//     let desconto = compra * 0.10;
// alert ("O valor da sua compra é " + novaCompra + "$ Reais com desconto de: " + desconto + "$ Reais");
// }

// else if (compra <=499){
//     let novaCompra = compra * 0.80;
//     let desconto = compra * 0.20;
// alert ("O valor da sua compra é " + novaCompra + "$ Reais com desconto de: " + desconto+ "$ Reais");
// }

// else {
//     let novaCompra = compra * 0.70;
//     let desconto = compra * 0.30;
// alert ("O valor da sua compra é " + novaCompra + "$ Reais com desconto de: " + desconto + "$ Reais");
// }

let valor = Number(prompt("Digite o valor da sua compra: "));
let desconto = Number(prompt("Digite o valor do desconto (0.00 a 1.0): "));

let valorFinal = (valor * desconto) - valor;

alert("O valor da sua compra será de: " + valorFinal + "$ Dinheiros");