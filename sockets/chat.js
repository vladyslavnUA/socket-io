module.exports = (io, socket) => {

    // listen for "new user"
    socket.on('new user', (username) => {
        console.log(`${username} has joined`);

        // send username to all connected clients (other users)
        io.emit('new user', username);
    })

    socket.on('new message', (data) => {
        console.log(`${data.sender}: ${data.message}`);
        io.emit('new message', data);
    })

}