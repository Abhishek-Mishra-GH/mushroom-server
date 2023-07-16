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
  console.log(socket.id);
  socket.on('send-msg', (data) => {
    console.log(data);
    socket.broadcast.emit('bc', data);
  })
})


server.listen(3000);