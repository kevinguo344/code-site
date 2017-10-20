'use strict';

var mongoose = require('mongoose');
var Item = mongoose.model('Items');

exports.list_all_items = function (req, res) {
	Item.find({}, function(err, item) {
	if (err)
		res.send(err);
	res.json(item);
  });
};

exports.create_item = function (req, res) {
	var new_item = new Item(req.body);
	new_item.save(function (err, item) {
		if(err)
			res.send(err);
		res.json(item);
	});
};

exports.read_item_byName = function (req, res) {
	Item.findOne({"name": req.params.name}, function(err, item){
		if(err)
			res.send(err);
		res.json(item);
	})
};

exports.update_item_byName = function (req, res) {
	Item.findOneAndUpdate(
		{"name": req.params.name},
		req.body,
		{new:true},
		function (err, item) {
			if(err)
				res.send(err);
			res.json(item);
		}
	);
};

exports.delete_item_byName = function (req, res) {
	Item.remove(
		{"name": req.params.name},
		function(err, item) {
		if(err)
			res.send(err);
		res.json({message: 'Item successfully deleted'});
	});
};

exports.read_item_byID = function (req, res) {
	Item.findById(req.params._id,
		function (err, item) {
			if(err)
				res.send(err);
			res.json(item);
		}
	);
};

exports.update_item_byID = function (req, res) {
	Item.findOneAndUpdate(
		{_id: req.params._id},
		req.body,
		{new:true},
		function (err, item) {
			if(err)
				res.send(err);
			res.json(item);
		}
	);
};

exports.delete_item_byID = function (req, res) {
	Item.remove(
		{_id: req.params._id},
		function(err, item) {
			if(err)
				res.send(err);
			res.json({message: 'Item successfully deleted'});
		}
	);
};