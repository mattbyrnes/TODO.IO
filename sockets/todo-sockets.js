const db = require("../models");

module.exports = function (io) {

	io.on('connection', function (socket) {
		socket.on('add-todo', function (data) {
			db.Todo.create(data)
				.then(function (data) {
					io.emit('render-todo', data);
				})
		})
	})

};
