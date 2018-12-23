let express = require('express');
let app = express()
let registerRoute = require('./route/registerRoute');
let cors = require("cors");
let mongoose = require('mongoose');
let newUserApi = require('./api/registerUserApi');
let newPost = require('./route/postRoute');
let category=require('./route/category');
let stripe = require("stripe");
let request = require("request");
let FCM= require("fcm-node");
let fcm = new FCM('AAAAXBPCf2E:APA91bG7F-o32tSp5SQ4eVub4WtUZAIc_TeBWwDq3sRdRRcFwNKVXAMCxcN523FviCWlkSHxZBgjizgZARTE0CvhfEEhdNvL5Z0alp4Kx5glgxcibP8mNjzWwo95PRgvP-K7nJQYA3mk');

app.use(cors());
mongoose.connect("mongodb://localhost:27017/userData");
let bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
//app.use(express.static('__dirname', uploadedImages));
//app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/static', express.static('uploadedImages'))
app.use('/category',category);
app.use('/', registerRoute);
app.use('/post', newPost);
app.listen(7070, function () {
	console.log("server isSSSSSS connected");
})
// var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
// 	to: ' fgODhEwHH_Y:APA91bEjZs_cIVvofotB5mLZJBmL6_8qrGHo2b2tPYFGKt2CEtSUnSy8r0IAOweXQK6wSrvAUw0ANAQh1S9Hn-tbTryt1nNP4RpNYueLlpS8dMEl8ccMVbx42l2szbTgs0YmLJ6HRGOH', 
// 	collapse_key: 'com.myapp',
	
// 	notification: {
// 			title: 'Title of your push notification', 
// 			body: 'Body of your push notification' 
// 	},
	
// 	data: {  //you can send only notification or only data(or include both)
// 			my_key: 'my value',
// 			my_another_key: 'my another value'
// 	}
// }
// fcm.send(message, function(err, response){
// 	if (err) {
// 			console.log("Something has gone wrong!")
// 	} else {
// 			console.log("Successfully sent with response: ", response)
// 	}
// })

