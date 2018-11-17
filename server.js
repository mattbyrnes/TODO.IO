const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// mongoose.connect('mongodb://localhost/todoio', { useNewUrlParser: true });
mongoose.connect('mongodb://bcmatt:bcpass1@ds163176.mlab.com:63176/heroku_fjn2c96d', { useNewUrlParser: true });


// /heroku_6fs4mqgr

require('./sockets/todo-sockets.js')(io);
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

server.listen(PORT, function () {
	console.log(`Server is listening on port ${PORT}`)
})
