'use strict';
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

const saveLog = (file)=>{
  console.log(`File ${file} changed successfully`);
};
const errorLog = (error)=>{
  console.log(`File change error ${error}`);
};


module.exports = {errorLog, saveLog};