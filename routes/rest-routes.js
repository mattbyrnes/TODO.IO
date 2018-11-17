class RestfulAPI {
	constructor(resourceName, app, model) {
		this.resource = resourceName;
		this.app = app;
		this.model = model;
	};

	delete() {
		this.app.delete(`/${this.resource}/:id`, (req, res) => {
			this.model.findOneAndDelete({ _id: req.params.id })
				.catch(function (err) {
					console.log(err);
				})
		})
	}

	update() {
		this.app.put(`/${this.resource}`, (req, res) => {
			this.model.findOneAndUpdate({ _id: req.body.id }, { $set: { complete: req.body.complete } })
				.then(function (data) {
					res.json(data);
				})
				.catch(function (err) {
					console.log(err)
				})
		})
	}

	create() {
		this.app.post(`/${this.resource}`, (req, res) => {
			this.model.create(req.body)
				.then((data) => {
					res.json(data);
				})
				.catch((err) => {
					res.json(err);
				});
		});
	};

	findAll() {
		this.app.get(`/${this.resource}`, (req, res) => {
			this.model.find({})
				.then((data) => {
					res.json(data);
				})
				.catch((err) => {
					res.json(err);
				});
		});
	};


}

module.exports = RestfulAPI;
