import chalk from 'chalk';
import readlineSync from 'readline-sync';

const name = readlineSync.question('Escreve teu nome ai jhow: ');
console.log(chalk.red('Olá, ' + name+ '!'));