const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');


const app = express();
const server = http.createServer(app);

exports.io = socketIO(server);
const { socket } = require('./sockets/socket');

socket();

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${port}`);

});