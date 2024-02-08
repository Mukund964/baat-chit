var socket = io();
var button = document.getElementById('send');
button.onclick = function exec(){
    socket.emit('from_client');
}
socket.on('from_server',()=>{
    const div = document.createElement('div');
    div.innerHTML = 'New Event from Server';
    document.body.appendChild(div);
});