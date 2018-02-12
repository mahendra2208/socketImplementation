const express = require('express');
const path = require('path');
const http = require('http');

const socketIo = require('socket.io');


const app = express();
const port = process.env_PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res)=> {
     res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
     console.log('New User Connected');
     socket.on('disconect', () => {
         console.log('User Disconnected');
     });
});


server.listen(port, ()=>{
    console.log(`Server runnung on port ${port}`);
})
