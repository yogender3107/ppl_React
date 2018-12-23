let Schema = require('../schema/category');

module.exports = {
    addCategory: function (data) {
        console.log('in the create category api');
        return new Promise(function (resolve, reject) {
            console.log(data);
            Schema.create(data, function (err, result) {
                if (err) {
                    console.log(err);
                    reject(err);

                }
                else {
                    console.log(result);
                    resolve(result);

                }

            })

        })
    },
    getCategory: function (query) {
        console.log("in the show category  api");
        return new Promise(function (resolve, reject) {
            Schema.find(query, function (err, result) {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                else {
                    console.log(result);
                    resolve(result);
                }
            })
        })
    }

}




