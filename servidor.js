// Importação de code module - http
// Inicialização de servidor em porta específica
// Mensagem de boas vindas.

var http = require("http")

http.createServer(
    function (requisicao, resposta){
        resposta.end("<h1>Bem Vindo ao NodeJS</h1>")
    }
).listen(8181)
console.log("Servidor Online!")