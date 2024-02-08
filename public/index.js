var socket = io();

socket.on('from_server',()=>{
    const div = document.createElement('div');
    div.innerHTML = 'New Event from Server';
    document.body.appendChild(div);
})