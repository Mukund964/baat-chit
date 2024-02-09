var socket = io();
var btn = document.getElementById('btn');
var msg = document.getElementById('msg');
btn.onclick = function exec(){
    socket.emit('from_client',{
        msg : msg.value
    });
}
socket.on('msg_rcvd',(data)=>{
    const li = document.createElement('li');
    li.innerText = data;
    document.body.appendChild(li);
})
// socket.on('from_server',()=>{
//     const div = document.createElement('div');
//     div.innerHTML = 'New Event from Server';
//     document.body.appendChild(div);
// });