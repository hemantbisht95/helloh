var mongoose = require('mongoose');
var Schema = mongoose.Schema;
      

var storySchema = new Schema({
	title:String,
	category:String,
	content:String,
	
});


var story = mongoose.model('story',storySchema);
module.exports= story;