const express = require('express');

const projectRouter = require('./routes/projectRoutes');

const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);

server.get('/', (req, res) => {
    res.send('<h1>Welcome to my server!</h1>')
})

module.exports = server;