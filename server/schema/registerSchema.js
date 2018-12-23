let mongoose= require('mongoose');
let newUserSchema = mongoose.Schema({
	username:{type:String},
	password:{type:String},
	email:{type:String ,unique:true},
	firstname:{type:String},
	lastname:{type:String},
	status:{type:String},
	token:{type:Number}

})
module.exports = mongoose.model('user',newUserSchema);