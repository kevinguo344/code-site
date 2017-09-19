'use strict';
var mongoose = require('mongoose')l
var Schema = mongoose.Schema;

var locationSchema = new Schema({
	name: {
		type: String,
		required: ''
	},
	location: {
		type: Array,
		default: [0.0, 0.0, 0.0]
	},
	camera_dir: {
		type: Array,
		default: [1.0, 1.0, 1.0]
	},
	type: {
		type: String,
		enum: ['Bedroom', 'Living Room', 'Garage', 'Kitchen', 'Porch']
	}
});

module.exports = mongoose.model('Locations', locationSchema);