var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    username: {
    	type: String,
    	required: true,
    	trim: true
    },
    email: {
      type: String, 
      required: true,
      trim: true
    },
    password: {
    	type: String,
    	required: true,
      trim: true
    },
  _questions: [{type: Schema.Types.ObjectId, ref: 'Question'}],
  _answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
  _events: [{type: Schema.Types.ObjectId, ref: 'Event'}]
},{timestamps: true}); 

var User = mongoose.model('User', UserSchema);
module.exports = User;