//onde esta o conjunto de objetos, todas as mlheres
const express = require ('express')
const router=express.Router()

const app = express() 
const porta = 3333


const mulheres = [
    {
        nome:"Jéssica Araujo",
        imagem:"IMG_20230829_145813.jpg",
        minibio:""
    },
    {
        nome:"Suhellyn Araujo",
        imagem:"",
        minibio:""
    },

    {
        nome:"Simara Conceição",
        imagem:"",
        minibio:""
    }

]

function mostraMulheres(req, res){
res.json(mulheres)
    
}

function mostraPorta(){
    console.log("servidor rodando na porta", porta);
}
app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)

// conf rorta lista e atribuimos numa constante mulheres , criamos função mulheres que recebe req res mandamos como resposta a lista de mulheres 