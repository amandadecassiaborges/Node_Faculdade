const express = require("express") // importando express

const app = express() // inicializando express

// criando rotas
app.get("/", function(requisicao, resposta) {
    resposta.send("Bem vindo a rota Home com Express!")
})

app.get("/cliente", function(requisicao, resposta) {
    resposta.send("Listando Cliente...")
})

app.get("/cliente/cadastro", function(requisicao, resposta) {
    resposta.send("Cadastrando Clientes na pagina!")
})

// passagem de paramentros

app.get("/ola/:nome", function(requisicao, resposta) {
    var nome = "<h2>Oi " + requisicao.params.nome + ". Seja Bem Vindo(a)!</h2"
    resposta.send(nome)
})

// app.get("/user/:cpf?", function(requisicao, resposta) {
//     var cpf = requisicao.params.cpf

//     if(cpf){
//         resposta.send("CPF: " + cpf)
//     }else {
//         resposta.send("Não informado parametro.")
//     }
// })

// app.get("/user/:cpf", function(requisicao, resposta) {
//     var valor = requisicao.query["valor"]
//     var valor2 = requisicao.query["valor2"]

//     if(valor){
//         resposta.send("Valor: " + valor + " Valor 2: " + valor2)
//     }else {
//         resposta.send("Não informado parametro.")
//     }
// })

app.get("/calculadora", function(req, res) {
    var valor = parseInt(req.query["valor"]);
    var valor2 = parseInt(req.query["valor2"]);
    var operacao = req.query["operacao"];
    var resultado;

    switch(operacao) {
        case "soma":
            resultado = valor + valor2;
            res.send("Resultado: " + resultado);
            break;
        case "subtrai":
            resultado = valor - valor2;
            res.send("Resultado: " + resultado);
            break;
        default:
            res.send("Operação inválida");
            break;
    }
})


// iniciando servidor
app.listen(8181, function(erro){
    if(erro){
        console.log("Erro!!")
    }else {
        console.log("Servidor Iniciado!")
    }
})