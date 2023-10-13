//onde esta o conjunto de objetos, todas as mlheres
const express = require("express"); // iniciandp express
const router = express.Router(); //configurando a primeira parte da rota
// const { v4: uuidv4 } = require("uuid"); // gerar id- nao sera usado pois o mongodb gera id
const cors = require('cors') // pacote cors-permite consumir a api no front 
const conectaBancoDeDados = require("./bancoDeDados"); // ligando ao arquivo banco de dados
conectaBancoDeDados(); // chamando a função que conecta o banco

const Mulher = require("./mulherModel"); //regra da criação

const app = express(); // iniciando o app
const porta = 3334;
app.use(express.json()); // tratando req
app.use(cors()) // liberando a aplicação para ser usado no frontend


//get
async function mostraMulheres(req, res) {
  try {
    const mulheresVindasDoBancoDeDados = await Mulher.find();
    res.json(mulheresVindasDoBancoDeDados);
  } catch (erro) {
    console.log(erro);
  }

  // res.json();
}

//post
async function criaMulher(req, res) {
  const novaMulher = new Mulher ({
   
    nome: req.body.nome,
    imagem: req.body.imagem,
    minibio: req.body.minibio,
    citacao: req.body.citacao  
});
try{
    const mulherCriada = await novaMulher.save()
    res.status(201).json(mulherCriada)
} catch(erro){
console.log(erro);
res.status(500).json({ error: 'Erro interno do servidor' });
}
}

//patch
async function corrigeMulher(req, res) {
  try{
const mulherEncontrada = await Mulher.findById(req.params.id);

if (!mulherEncontrada) {
  return res.status(404).json({ error: 'Mulher não encontrada' });
}

const updatedMulher = {
  nome: req.body.nome || mulherEncontrada.nome,
  minibio: req.body.minibio || mulherEncontrada.minibio,
  imagem: req.body.imagem || mulherEncontrada.imagem,
  citacao: req.body.citacao || mulherEncontrada.citacao,
};
const mulherAtualizadaNoBancoDeDados = await Mulher.findByIdAndUpdate(
  req.params.id,
  updatedMulher,
  { new: true } // Retorna o documento atualizado
);
res.json(mulherAtualizadaNoBancoDeDados);
} catch (erro) {
  console.log(erro);
  res.status(500).json({ error: 'Erro interno do servidor' });
}
}



//delete
async function deletaMulher(req, res) {

 try{

await Mulher.findByIdAndDelete(req.params.id)

res.json({messagem: 'Mulher Deletada com sucesso!'})

 } catch(erro){

console.log(erro);

 }
 
}

//porta
function mostraPorta() {
  console.log("servidor rodando na porta", porta);
}

app.use(router.get("/mulheres", mostraMulheres)); //rota get / mulheres
app.use(router.post("/mulheres", criaMulher)); // rota post / mulheres
app.use(router.patch("/mulheres/:id", corrigeMulher)); //rota patch/mulheres/:id
app.use(router.delete("/mulheres/:id", deletaMulher)); // rota delete/mulheres
//porta
app.listen(porta, mostraPorta); //servidor ouvindo a porta

