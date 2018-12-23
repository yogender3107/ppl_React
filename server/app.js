let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/userData");

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });
io.on('connection', function(socket){
	console.log('a user connected',socket.id);
  socket.on("message",((data)=>{console.log("the message is received",data); socket.emit("message",{"message":"thnaqu for using server"});}))
 // socket.on("connection",()=>{console.log("this is server")});
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
