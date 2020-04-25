const { io } = require('../index');

//Server socket listener
io.on('connection', (client) => {
    
    //Send data to client
    client.emit('sendData', {
        usuario: 'ADMIN',
        message: '!Bienvenido a esta aplicación!'
    });
    console.log('USUARIO CONNECTADO');
    client.on('disconnect', () => console.log('USUARIO DESCONECTADO')); //Client disconnection listener

    //Client listener
    client.on('enviarMensaje', (data, callback) => {
        // if(data.usuario)  callback({resp: 'TODO SALIÓ BIEN'});
        // else  callback({resp:'TODO SALIO MAL'});
        console.log(data);
        client.broadcast.emit('sendData', data);//BROADCAST: Emits a message from server to each browser
    });
});
