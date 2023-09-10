const express = require ('express')
const router = express.Router() // é uma função que ta vindo de dentro do express

const app = express() 
const porta = 3333

function monstraOla(req, res){
    res.send("configuramos a rota através do router, função mostra ola, segunda configuração da rota é enviar o endereço e chamar a função")
}

function mostraPorta(){
    console.log("servidor rodando na porta", porta);
}
app.use(router.get("/ola", monstraOla)) // get espera endereço /ola , função
app.listen(porta, mostraPorta)