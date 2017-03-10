var mongoose = require('mongoose');
var Schema = mongoose.Schema;
      

var userSchema = new Schema({
	name:String,
	phone:String,
	email:String,
	password:String
   
});


var user = mongoose.model('users',userSchema);
module.exports= user;