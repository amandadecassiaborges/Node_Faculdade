var readline = require('readline')

var rl = readline.createInterface(
    process.stdin, process.stdout);

rl.question('Qual sua idade? ', (idade) => {
    console.log('Minha idade é: ' + idade);
    rl.close()
});