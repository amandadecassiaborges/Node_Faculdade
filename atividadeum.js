var leitorNumero = require('readline')

var rl = leitorNumero.createInterface(
    process.stdin, process.stdout);

rl.question('Informe o primeiro número? ', (numeroum) => {
    rl.question('Informe o segundo número? ', (numerodois) => {
        console.log(parseFloat(n1) + parseFloat(n2))
        rl.close();
    });
});



