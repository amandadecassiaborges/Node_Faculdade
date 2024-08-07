const express = require("express") // Importando express

const app = express() //Inicializando express

// Criando rotas
app.get("/", function(requisicao, resposta){
    resposta.send("Bem vindo a rota Home com Express!")
})
app.get("/cliente", function(requisicao, resposta){
    resposta.send("Listando cliente...!")
})
app.get("/cliente/cadastro", function(requisicao, resposta){
    resposta.send("Cadastrando clientes!")
})

// Iniciando servidor

app.listen(8181, function(erro){
    if(erro){
        console.log("Erro!")
    }else{
        console.log("Servidor Iniciado!")
    }
})