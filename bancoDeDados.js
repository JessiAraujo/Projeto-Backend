const mongoose = require('mongoose')
require('dotenv').config()
//try serve p definir uma tentativa de execução do código
//async - assincrono- resolve um prob por vez, se ha instrução que possui dependencia as anteriores pedimos que a execução anterior seja atendida primeiro. libera o node enquanto o banco nao responde
// await - esperar uma execução para que o mongoose conecte - o node nao parar de atender as outras pessoas usuarios, quero que o resto continue funcionando enquanto esta conectando ao banco - ja que o servidor 

async function conectaBancoDeDados(){
try{
    
    console.log('Conexão com banco de dados foi iniciada');
    
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Conexão com banco de dados realizado com sucesso!');

} catch(erro){
    
    console.log(erro);
}
}
module.exports = conectaBancoDeDados
