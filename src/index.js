const express = require('express');
const http = require('http');
const path = require('path');
const colors = require('colors');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;

const app = express(); //Express server
const server = http.createServer(app)//create http server and send app express as argument 

//Settings
app.use(express.static(path.join(__dirname , 'public')));

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));


server.listen(port, err => {
    if(err) throw new Error(err);
    console.log(`${colors.magenta('Server on port:')} ${colors.green(port)}`);
});
module.exports.io = socketIO(server);//socket IO server connection
require('./sockets/socket');
