//servir as info solicitadas pelo cliente
const express = require ('express')
const router=express.Router()

const app = express() 
const porta = 3333

function mostraMulher(req, res){
    res.json({
        nome:"Jéssica Araújo",
        imagem: src="IMG_20230829_145813.jpg", 
        minibio: "Estudante de análise e desenvolvimento de sistemas futura desenvolvedora."
    }) // envia pela internet varias informações organizadas, um objeto

}

function mostraPorta(){
    console.log("servidor rodando na porta", porta);
}
app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)
