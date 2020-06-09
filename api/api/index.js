const express = require('express');
const http = require('http');

const app = express();

const server = http.createServer(app.get('/v1/users/me', async (req, res) => res.status(200).send('Hello user!!!')));
server.on('listening on port 4000', () => {});

app.listen(4000);
