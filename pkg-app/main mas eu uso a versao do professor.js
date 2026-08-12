const chalk = require(chalk) //NÃO ESQUECER DE MUDAR PARA COMMONJS NO PACKAGE RAHHHHHH
const read = require("readline-sync") //NÃO ESQUECER DE MUDAR PARA COMMONJS NO PACKAGE RAHHHHHH

let nome = read.question("Digite seu nome: ");

console.log(chalk.red("olá, ", nome));

console.log(chalk.red(`olá, ${nome}`))
