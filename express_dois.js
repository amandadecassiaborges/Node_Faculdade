const express = require("express") // importando express

const app = express() // inicializando express

const path = require('path') // importando core module
const basePath = path.join(__dirname,'templates')

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())


app.get('/users/add', (req, res)=>{
    res.sendFile(basePath + '/form.html')
})

app.post('/users/save', (req, res)=>{
    console.log(req.body)
    console.log(req.body.name)
    console.log(req.body.idade)

    res.sendFile(basePath + '/form.html')
})


// criando rotas
// app.get("/", function(requisicao, resposta) {
//     resposta.send("Bem vindo a rota Home com Express!")
// })
// const checkAuth = function(req,res,next){
//     req.authStatus = false

//     if(req.authStatus){
//         console.log('Está logado, pode continuar')
//         next()
//     }else {
//         console.log('nao esta logado.')
//         next()
//     }
// }

// app.use(checkAuth)

// app.get("/", function(requisicao, resposta) {
//     console.log("enviando arquivo")
//     resposta.sendFile(basePath + '/index.html')
// })

// app.get("/cliente", function(requisicao, resposta) {
//     resposta.send("Listando Cliente...")
// })

// app.get("/cliente/cadastro", function(requisicao, resposta) {
//     resposta.send("Cadastrando Clientes na pagina!")
// })

// // passagem de paramentros

// app.get("/ola/:nome", function(requisicao, resposta) {
//     var nome = "<h2>Oi " + requisicao.params.nome + ". Seja Bem Vindo(a)!</h2"
//     resposta.send(nome)
// })

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

// app.get("/calculadora", function(req, res) {
//     var valor = parseInt(req.query["valor"]);
//     var valor2 = parseInt(req.query["valor2"]);
//     var operacao = req.query["operacao"];
//     var resultado;

//     switch(operacao) {
//         case "soma":
//             resultado = valor + valor2;
//             res.send("Resultado: " + resultado);
//             break;
//         case "subtrai":
//             resultado = valor - valor2;
//             res.send("Resultado: " + resultado);
//             break;
//         default:
//             res.send("Operação inválida");
//             break;
//     }
// })


// iniciando servidor
app.listen(8181, function(erro){
    if(erro){
        console.log("Erro!!")
    }else {
        console.log("Servidor Iniciado!")
    }
})