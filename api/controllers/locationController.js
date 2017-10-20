'use strict';

var mongoose = require('mongoose');
var Location = mongoose.model('Locations');

//verified works
exports.list_all_locations = function (req, res) {
	console.log("Searching for all")
	Location.find({}, function(err, location) {
	if (err)
		res.send(err);
	res.json(location);
  });
};

exports.create_a_location = function (req, res) {
	console.log(req.body._roomID);
	console.log(mongoose.Types.ObjectId.isValid(req.body._roomID));
	//req.body._roomID = Schema
	//var new_location = new Location(req.body);
	//console.log(new_location);
	/*
	new_location.save(function (err, location) {
		if(err)
			res.send(err);
		res.json(location);
	});*/
};

exports.read_a_location_byName = function (req, res) {
	console.log(req.body);
	Location.findOne({"name": req.body.name}, function(err, location){
		if(err)
			res.send(err);
		res.json(location);
	})
}

exports.update_a_location_byName = function (req, res) {
	Location.findOneAndUpdate(
		{"name": req.params.locName},
		req.body,
		{new:true},
		function (err, location) {
			if(err)
				res.send(err);
			res.json(location);
		}
	);
};

//verified works
exports.delete_a_location_byName = function (req, res) {
	Location.remove(
		{"name": req.params.name},
		function(err, location) {
			if(err)
				res.send(err);
			res.json({message: 'Location successfully deleted'});
		}
	);
}

//verified works
exports.read_a_location_byID = function (req, res) {
	Location.findById(req.params.locId,
		function (err, location) {
			if(err)
				res.send(err);
			res.json(location);
		}
	);
};

//verified works
exports.update_a_location_byID = function (req, res) {
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

//verified works
exports.delete_a_location_byID = function (req, res) {
	Location.remove(
		{_id: req.params.locId},
		function(err, location) {
			if(err)
				res.send(err);
			res.json({message: 'Location successfully deleted'});
		}
	);
}