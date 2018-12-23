let schema = require('../schema/registerSchema');
module.exports = {

	createUser: function (data) {
		console.log("in the api function");

		return new Promise(
			function (resolve, reject) {
				console.log(data);
				schema.create(data, function (err, result) {
					if (err) {
						reject(err);
						console.log(err);
					}
					else {
						resolve(result);
						console.log(result);
					}
				}
				)
			}
		)

	},
	findUser: function (data) {
		console.log("in the function find user");
		return new Promise(
			function (resolve, reject) {

				schema.find({ "email": data.email }, function (err, result) {

					if (err) { reject(err); }
					else { resolve(result); }
				})
			}
		)
	},


	updateUser: function (query, updatedData) {
		console.log("in the update function");
		console.log(query);
		console.log(updatedData);
		return new Promise(function (res, rej) {

			schema.findOneAndUpdate(query, { $set: updatedData }, { new: true }, function (err, result) {
				if (err) {
					rej(err);
					console.log(err);
				}
				else {
					console.log(result);
					res(result);
				}
			})
		}

		)
	},
	authenticateUser: function (data) {
		console.log("in the authenticate user api",data);
		return new Promise(function (res, rej) {
			schema.findOne(data, function (err, result) {
				if (err) {
					console.log(err);
					rej(err);
				}
				else {
					console.log("result", result);
					res(result);
				}
			})
		})
	}
}