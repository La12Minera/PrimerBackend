const express = require('express');
const http = require('http');

const expressConfig = require('./config/express');
const connectDB = require('./config/database');
const { connect: connectSocket, socket } = require('./config/socket');
const swaggerDocs = require('./config/swagger');
const routes = require('./routes');
const { log } = require('./utils/logger');

const app = express();
const server = http.Server(app);

expressConfig(app);
connectSocket(server);

const PORT = process.env.PORT || 3001;

// Start server
server.listen(PORT, () => {
  // connect to database
  connectDB();

  // Routes
  routes(app);

  // Swagger
  swaggerDocs(app, PORT);

  socket.io.on('connection', (socket) => {
    log.info(`Socket connected: ${socket.id}`);

    socket.on('disconnect', () => {
      log.info(`Socket disconnected: ${socket.id}`);
    });
  });

  log.info(`Server running 🤖🚀 at http://localhost:${PORT}/`);
});

module.exports = app;
