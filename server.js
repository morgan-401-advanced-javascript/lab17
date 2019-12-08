'use strict';
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
const logger = require('./logger.js');

socket.on('save', file=>{
  logger.saveLog(file);
});

socket.on('error', error=>{
  logger.errorLog(error);
});
