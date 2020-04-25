
//Client side socket listener 
const socket = io();
socket.on('connect', () => console.log('CONECTADO AL SERVIDOR'));//Server Connection Listener
socket.on('disconnect', () => console.log('PERDIMOS CONNECCIÓN CON EL SERVIDOR'));//Server Disconecction Listener

//Send data
socket.emit('enviarMensaje', {
    usuario: 'Agustín La Valla',
    message: 'Hola mundo'
}, (resp) => console.log('RESPUESTA SERVER', resp));

//Server Data Listener
socket.on('sendData', (message) => console.log('SERVIDOR:', message));