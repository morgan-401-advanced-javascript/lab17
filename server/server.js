'use strict';
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');


socket.on('connection', socket=>{
  console.log(`Connected socket.id`);
  socket.on('save', file=>{
    socket.broadcast.emit('save', file);
  });
    
  socket.on('error', error=>{
    socket.broadcast.emit('err', error);
  });
});
