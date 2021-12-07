$(document).ready(() => {

    // connect to socket.IO
    const socket = io.connect();

    let currentUser;
    
    $('#create-user-btn').click((e) =>{
        e.preventDefault();
        
        if ($('#username-input').val().length > 0){
            // new user function to server
            socket.emit('new user', $('#username-input').val());
            currentUser = $('#username-input').val();
            $('.username-form').remove();

            // make main page visible
            $('.main-container').css('display', 'flex');
        }
    });

    $('#send-chat-btn').click((e) => {
        e.preventDefault();
        let message = $('#chat-input').val();
        if (message.length > 0) {
            // send message to server which will then send to all clients
            socket.emit('new message', { 
                sender: currentUser,
                message: message,
            });
            $('#chat-input').val('');
        }
    });

    // socket (backend) listeners
    socket.on('new user', (username) => {
        console.log(`${username} has joined the chat`);

        // add user to userlist div
        $('.users-online').append(`<div class="user-online">${username}</div>`);
    });

    socket.on('new message', (data) => {
        $('.message-container').append(`
        <div class="message">
            <p class="message-user">${data.sender}: </p>
            <p class="message-text">${data.message}</p>
        </div>
        `);
    })

})