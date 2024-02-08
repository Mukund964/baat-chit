const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection' , (socket) => {
    console.log("device joined chat" , socket.id);
    setInterval(() => {
    socket.emit('from_server')    
    }, 2000);
})

app.use('/',express.static(__dirname + '/public'));
server.listen(3000,()=>{
    console.log('server started');
})