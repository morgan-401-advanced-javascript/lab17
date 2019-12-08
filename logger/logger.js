'use strict';
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

socket.on('save', file=>{
  console.log(`File ${file} changed successfully`);
});
socket.on('error', err=>{
  console.log(`File change error ${err}`);
});

