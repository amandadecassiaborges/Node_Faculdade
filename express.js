const express = require("express") // Importando express

const app = express() //Inicializando express

// Criando rotas
app.get("/", function(requisicao, resposta){
    resposta.send("Bem vindo a rota Home com Express!")
})

// Iniciando servidor

app.listen(8181, function(erro){
    if(erro){
        console.log("Erro!")
    }else{
        console.log("Servidor Iniciado!")
    }
})