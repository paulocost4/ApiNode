// http://nodebr.com/nodejs-e-mongodb-introducao-ao-mongoose/     //Artigo sobre o mongoose
const express = require('express')
const app = express()
const indexRoutes = require('./routes/index-routes')
app.use('/', indexRoutes)

module.exports = app; //exporta a constante app




const Empregados = require('./models/empregados') // Modelo

var jsonInput = {
    nome: 'Paulo',
    idade: 21,
    dataNascimento: '05/24/1999',
    funcao: 'Desenvolvedor', // Ignora que a api é pra 'diaristas' e afis
    disponibilidade: 'Segunda/Sexta 07:00h/13:00',
    email: 'pcesarcosta@outlook.com',
    senha: '123456PC',
    cidade: 'Xique-Xique',
    estado: 'Bahia',
    bairro: 'Centro'
}
var Paulo = new Empregados(jsonInput)

function inserir(Dados){ // 
    Dados.save((err, registro)=>{
        if (err) return console.log(`Mongoose@ApiNodeJs >> error: \n{err}`)
        else console.dir(registro)
    })
}
function inserirBD(Dados){    //Inseri apenas se o registro não existir no bd     
    Empregados.find(jsonInput, (err, achados)=>{ // Procura no bd se existe algum dado igual no bd, se não houver salva o dado no bd
        if (err) {
            console.log(`Mongoose@ApiNodeJs >> error: \n{err}`)
        }
        else if(achados === ''){
            console.log(`Mongoose@ApiNodeJs >> Salvando dados no bd`)
            inserir(Dados)
        }
        else{
            console.log('Mongoose@ApiNodeJs >> error: Já existe um registro identico cadastrado')
        } 
    })
}

inserirBD(Paulo)
// inserirBD(Paulo)

