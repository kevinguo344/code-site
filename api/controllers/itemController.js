'use strict';

var mongoose = require('mongoose');
var Item = mongoose.model('Items');

//verified works
exports.list_all_items = function (req, res) {
	Item.find({}, function(err, item) {
	if (err)
		res.send(err);
	res.json(item);
  });
};

//verified works
exports.create_item = function (req, res) {
	var new_item = new Item(req.body);
	console.log(new_item);
	new_item.save(function (err, item) {
		if(err)
			res.send(err);
		res.json(item);
	});
};

//needs work
exports.read_item_byName = function (req, res) {
	Item.findOne({"name": req.params.name}, function(err, item){
		if(err)
			res.send(err);
		res.json(item);
	})
};

//needs work
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

//needs work
exports.delete_item_byName = function (req, res) {
	Item.remove(
		{"name": req.params.name},
		function(err, item) {
		if(err)
			res.send(err);
		res.json({message: 'Item successfully deleted'});
	});
};

//verified works
exports.read_item_byID = function (req, res) {
	Item.findById(req.params.itemId,
		function (err, item) {
			if(err)
				res.send(err);
			res.json(item);
		}
	);
};

//verified works
exports.update_item_byID = function (req, res) {
	Item.findOneAndUpdate(
		{_id: req.params.itemId},
		req.body,
		{new:true},
		function (err, item) {
			if(err)
				res.send(err);
			res.json(item);
		}
	);
};

//verified works
exports.delete_item_byID = function (req, res) {
	Item.remove(
		{_id: req.params.itemId},
		function(err, item) {
			if(err)
				res.send(err);
			res.json({message: 'Item successfully deleted'});
		}
	);
};