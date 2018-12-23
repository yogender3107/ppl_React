let Schema = require('../schema/postSchema');

module.exports = {
    createPost: function (data) {
    console.log("data is in the create post api is ", data);
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
        getPost: function (filter,sort,options) {
        console.log("in the get post api1212121");
        console.log("the filter is ",filter);
        console.log("in the api options",options);
        return new Promise(function (resolve, reject) {
            Schema.find(filter).sort(sort).limit(options.limit).skip(options.skip).populate('category').
                then((result) => {
                    console.log('result issssssss', result);
                    resolve(result);
                }
                )
            
        }
        )
    },
    addLike: function (query, data) {
        console.log('in the add like api');
        return new Promise(function (resolve, reject) {
            console.log("the data is",data);
            Schema.update(query, { $push: { likes: data },$inc:{likesCount:1}} , function (err, result) {
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
    findLike: function (query) {
        return new Promise(function (resolve, reject) {
            console.log(query);
            Schema.find(query, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }

            })

        })
    },
    getSinglePost: function (query) {
        return new Promise(function (resolve, reject) {
            console.log(query);
            Schema.find(query).populate('category').then((result) => {
                resolve(result);
            })

        })


    },
    addComment: function (query, data) {
        console.log("int the add commnet api");
        return new Promise(function (resolve, reject) {
            console.log(query);
            console.log(data);
            Schema.update(query, { $push : {comment: { username: data.username, comment: data.comment,firstname:data.firstname } } ,$inc:{commentCount:1}}, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            })
        })
    },
    getCount: function (query) {
        return new Promise(function (resolve, reject) {
            console.log(query);
            Schema.find(query).count().populate('category').then((result) => {
                resolve(result);
            })

        })


    },

}




