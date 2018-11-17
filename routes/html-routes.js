const path = require('path');
const db = require('../models');

module.exports = function (app) {

	app.get('/', function (req, res) {
		db.Todo.find({})
			.catch(function (err) {
				console.log(err)
			})

	});
}
