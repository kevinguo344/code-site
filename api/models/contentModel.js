'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContentSchema = new Schema({
	name:{
		type: String,
		required: "Please name your new location"
	},
	info:{
		type: String,
	}
});

module.exports = mongoose.model('Content', ContentSchema);