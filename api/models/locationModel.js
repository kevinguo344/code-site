'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationSchema = new Schema({
	name:{
		type: String,
		required: "Please name your new location"
	},
	camera_position:{
		type: Array,
		default: [0.0, 0.0, 0.0]
	},
	camera_lookAt:{
		type: Array,
		default: [0.0, 0.0, 0.0]
	},
	items:{
		type: Array,
		default: [{name:"Some Name", id: 0}]
	}
});

module.exports = mongoose.model('Locations', locationSchema);