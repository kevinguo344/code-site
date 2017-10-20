'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
	name:{
		type: String,
		required: "Please name your new item"
	},
	info:{
		type: String,
		required: "Please put some content related to this item."
	}
});

module.exports = mongoose.model('Item', ItemSchema);