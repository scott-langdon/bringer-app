var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
var ObjectId = mongoose.Schema.Types.ObjectId;

var EventSchema = new mongoose.Schema({
	eventName: {
		type: String,
		required: true,
		minlength: 4
	}, 
	location: {
		type: String, 
		required: true,
		minlength: 4
	},
	date: {
		type: Date, 
		required: true, 
		trim: true
	}, 
	createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    guests: [{ type: ObjectId, ref: 'User'}],
    items: Array,
	_user: {type:ObjectId, ref: 'User'}
})

var Event = mongoose.model('Event', EventSchema);
module.exports = Event;