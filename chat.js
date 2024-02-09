const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection' , (socket) => {
    console.log("device joined chat" , socket.id);
    socket.on('from_client',(data)=>{
        console.log(data.msg);
        //socket.emit('msg_rcvd',data.msg);  --> socket.emit -- only sender side
        //socket.broadcast.emit('msg_rcvd',data.msg) -> everyone in the room except the sender
        socket.emit('msg_rcvd',data.msg) //-> both the sender and caller
    })
})


app.use('/',express.static(__dirname + '/public'));
server.listen(3000,()=>{
    console.log('server started');
})