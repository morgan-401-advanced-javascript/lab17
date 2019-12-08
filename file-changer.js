'use strict';
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
const server = require('./server.js');

const fs = require('fs');
const util = require('util');
const faker = require('faker');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const alterFile = async file => {
  try {
    let contents = await readFile(file);
    await writeFile(file, faker.lorem.sentence());
    socket.emit('save', file);
    // console.log(`${file} saved`);
  } catch (e) {
    socket.emit('error', e);
    // throw e;
  }
};

let file = process.argv.slice(2).shift();
alterFile(file);
