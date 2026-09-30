// // ==========================================
// // EXERCÍCIO 1
// // ==========================================

// const entrada = require("prompt-sync")();

// let usuario = entrada("Digite seu nome: ");
// console.log("Olá, " + usuario + "!");


// // ==========================================
// // EXERCÍCIO 2
// // ==========================================

// let valorA = Number(entrada("Informe o primeiro número: "));
// let valorB = Number(entrada("Informe o segundo número: "));

// console.log("Tipo do primeiro valor:", typeof valorA);
// console.log("Tipo do segundo valor:", typeof valorB);

// let resultadoSoma = valorA + valorB;
// let resultadoSub = valorA - valorB;
// let resultadoMult = valorA * valorB;
// let resultadoDiv = valorA / valorB;
// let resultadoPot = valorA ** valorB;

// console.log("Soma:", resultadoSoma);
// console.log("Subtração:", resultadoSub);
// console.log("Multiplicação:", resultadoMult);
// console.log("Divisão:", resultadoDiv);
// console.log("Potenciação:", resultadoPot);


// // ==========================================
// // EXERCÍCIO 3
// // ==========================================

// let idadePessoa = Number(entrada("Informe sua idade: "));

// if (idadePessoa < 18) {
//     console.log("Você é menor de idade.");
// } else {
//     console.log("Você é maior de idade.");
// }


// // ==========================================
// // EXERCÍCIO 4
// // ==========================================

// let numeroEscolhido = Number(entrada("Digite um número: "));

// if (numeroEscolhido % 2 === 0) {
//     console.log("O número é par.");
// } else {
//     console.log("O número é ímpar.");
// }

// console.log("Metade do número:", numeroEscolhido / 2);


// // ==========================================
// // EXERCÍCIO 5
// // ==========================================

// let primeiro = Number(entrada("Digite o primeiro valor: "));
// let segundo = Number(entrada("Digite o segundo valor: "));
// let terceiro = Number(entrada("Digite o terceiro valor: "));

// let maiorValor = Math.max(primeiro, segundo, terceiro);

// console.log("O maior número informado foi:", maiorValor);


// // ==========================================
// // EXERCÍCIO 6
// // ==========================================

// let notaFinal = Number(entrada("Digite sua nota: "));

// if (notaFinal >= 6) {
//     console.log("Aluno aprovado!");
// } else if (notaFinal >= 4) {
//     console.log("Aluno em recuperação.");
// } else {
//     console.log("Aluno reprovado.");
// }


// // ==========================================
// // EXERCÍCIO 7
// // ==========================================

// let precoChuteira = Number(entrada("Digite o preço da chuteira: "));
// let quantidadePares = Number(entrada("Quantos pares você deseja comprar? "));

// let valorCompra = precoChuteira * quantidadePares;

// if (quantidadePares >= 3) {
//     let desconto = valorCompra * 0.10;
//     let valorComDesconto = valorCompra - desconto;

//     console.log("Você recebeu 10% de desconto!");
//     console.log("Valor final da compra:", valorComDesconto);
// } else {
//     console.log("Sua compra não possui desconto.");
//     console.log("Valor total:", valorCompra);
// }


// // ==========================================
// // EXERCÍCIO 8
// // ==========================================

// let numeroX = Number(entrada("Digite o primeiro número: "));
// let numeroY = Number(entrada("Digite o segundo número: "));

// console.log("Escolha uma operação:");
// console.log("+ para soma");
// console.log("- para subtração");
// console.log("* para multiplicação");
// console.log("/ para divisão");
// console.log("** para potenciação");

// let operacao = entrada("Digite a operação desejada: ");
// let resultado;

// switch (operacao) {
//     case "+":
//         resultado = numeroX + numeroY;
//         break;

//     case "-":
//         resultado = numeroX - numeroY;
//         break;

//     case "*":
//         resultado = numeroX * numeroY;
//         break;

//     case "/":
//         resultado = numeroX / numeroY;
//         break;

//     case "**":
//         resultado = numeroX ** numeroY;
//         break;

//     default:
//         console.log("Operação inválida.");
// }

// if (resultado !== undefined) {
//     console.log("Resultado:", resultado);
// }


// // ==========================================
// // EXERCÍCIO 9
// // ==========================================

// let nascimento = Number(entrada("Em qual ano você nasceu? "));
// let anoAtual = 2026;

// let idadeAtual = anoAtual - nascimento;

// console.log("Sua idade é:", idadeAtual);

// if (idadeAtual >= 18) {
//     console.log("Você já possui idade suficiente para tirar a carteira.");
// } else {
//     console.log("Você ainda não possui idade suficiente para tirar a carteira.");
// }


// // ==========================================
// // EXERCÍCIO 10
// // ==========================================

// let temperatura = Number(entrada("Informe a temperatura em Celsius: "));

// if (temperatura <= 15) {
//     console.log("A temperatura está fria.");
// } else if (temperatura <= 26) {
//     console.log("A temperatura está amena.");
// } else {
//     console.log("A temperatura está quente.");
// }


// // ==========================================
// // EXERCÍCIO 11
// // ==========================================

// let valor1 = Number(entrada("Digite o primeiro número: "));
// let valor2 = Number(entrada("Digite o segundo número: "));

// if (valor1 > valor2) {
//     console.log(`O número ${valor1} é maior que ${valor2}.`);
// } else if (valor1 < valor2) {
//     console.log(`O número ${valor1} é menor que ${valor2}.`);
// } else {
//     console.log("Os dois números são iguais.");
// }
