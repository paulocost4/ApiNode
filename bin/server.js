
const app = require('../src/app'); 
const http = require('http')
const debug = require('debug')('nodestr:server')



const express = require('express')


function onError(error){
    if(error.syscall !== 'listen'){
        throw error
    }
}

function onListening(){
    const addr = server.address()
    const bind = typeof addr === 'string' ? 'pipe' + addr: porta + addr.port 
    debug('Listening on ' + bind)
}


function criarPorta(val){
    var porta = parseInt(val, 10)
    if (porta >= 0){
        return porta
    }
}


const porta = criarPorta(process.env.PORT || 3000)
app.set('port', porta)


// server
const server = http.createServer(app) 
server.listen(porta)
server.on('error', onError)
server.on('listening', onListening)
console.log('It\'s working at port: ' + porta)


// MongoDB Connection
const Mongoose = require('mongoose');
require('dotenv').config();
const db = Mongoose.connection;

Mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true
});

db.on('connected', () => {
    console.log('Mongoose@ApiNodeJs >> Mongoose default connection is open');
});
db.on('error', (err) => {
    console.log(`Mongoose@ApiNodeJs >> error: \n{err}`)
});
db.on('disconnected', () => {
    console.log('Mongoose@ApiNodeJs >> Disconnected');
});

