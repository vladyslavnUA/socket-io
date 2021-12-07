$(document).ready(() => {

    // connect to socket.IO
    const socket = io.connect();
    
    $('#create-user-btn').click((e) =>{
        e.preventDefault();
        let username = $('#username-input').val();
        if (username.length > 0){
            // new user function to server
            socket.emit('new user', username);
            $('.username-form').remove();
        }
    });

    // socket (backend) listeners
    socket.on('new user', (username) => {
        console.log(`${username} has joined the chat`);
    });

})