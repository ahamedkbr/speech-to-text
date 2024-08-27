require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/health-check', (req, res) => {
  return res.status(200).json({ message: 'OK', uptime: process.uptime() });
});

io.on('connection', (socket) => {
  console.log(socket.id);
});

server.listen(process.env.PORT, () => {
  console.log('Server is running on', process.env.PORT);
});