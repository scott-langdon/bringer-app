var mongoose = require('mongoose');
var Event = mongoose.model('Event');
var User = mongoose.model('User');

module.exports = {
	index: function(req, res) {
	 Event.find({}).populate('_user').exec(function(err, events) {
	     if(err) {
	      res.status(500).json(err);
	     } else {
	       res.json(events);
	       console.log(events);
		 }
	 });
	},
	show: function(req, res){
		Event.findOne({_id: req.params.id}).populate([
			{
				path: '_user',
				select: '_id username'
			},
			{
				path: 'events',
				populate: {
					path: '_user',
					select: '_id username'
				}
			}
		]).exec(function(err, event){
			if(err) {
				res.status(500).json(err);
			} else {
				res.json(event); 
			}
		})
	}, 
	create: function(req, res){
		var event = new Event(
	      {
	              _user:req.session.user._id, 
		      eventName:req.body.name,
		       location:req.body.location,
	 			   date:req.body.dt
	      }
    	);
	    event.save(function(err, event) {
	      if(err) {
	        res.status(500).json(err);
	      } else {
	        User.update({_id:req.session.user._id}, { $addToSet: {_events: event._id } }, function(err, data) {
	          if(err) {
	            res.status(500).json(err);
	          } else {
				res.json({created:true});
	          }
	        });
	      }
	    });
	}
}