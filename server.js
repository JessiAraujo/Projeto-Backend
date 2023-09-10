//servir as info solicitadas pelo cliente
const express = require ('express')

const app = express() 
const porta = 3333

function mostraPorta(){
    console.log("servidor rodando na porta", porta);
}

app.listen(porta, mostraPorta)
