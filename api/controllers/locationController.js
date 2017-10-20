'use strict';

var mongoose = require('mongoose');
var Location = mongoose.model('Locations');

exports.list_all_locations = function (req, res) {
	Location.find({}, function(err, location) {
	if (err)
		res.send(err);
	res.json(location);
  });
};

exports.get_a_location = function (req, res) {
	Location.findOne({name: req.params.name}, function(err, location){
		if(err)
			res.send(err);
		res.json(location);
	})
}

exports.create_a_location = function (req, res) {
	var new_location = new Location(req.body);
	new_location.save(function (err, location) {
		if(err)
			res.send(err);
		res.json(location);
	});
};

exports.read_a_location = function (req, res) {
	Location.findById(req.params.locId, function (err, location) {
		if(err)
			res.send(err);
		res.json(location);
	});
};

exports.update_a_location = function (req, res) {
	Location.findOneAndUpdate(
		{_id: req.params.locId},
		req.body,
		{new:true},
		function (err, location) {
			if(err)
				res.send(err);
			res.json(location);
		}
	);
};

exports.delete_a_location = function (req, res) {
	Location.remove({
		_id: req.params.locId
	}, function(err, location) {
		if(err)
			res.send(err);
		res.json({message: 'Location successfully deleted'});
	});
}