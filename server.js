const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: "*"
  }
});


io.on('connection', (socket) => {

  

  socket.on('new-user', (data) => {
    let bcMsg = {...data, msg: "Connected!"};
    socket.broadcast.emit('new-user', bcMsg);
  });

  socket.on('send-msg', (data) => {
    socket.broadcast.emit('bc', data);
  });
})


server.listen(3000);
