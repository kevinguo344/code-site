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
	associated_data:{
		type: Array,
		default: [{name:"Some Name", info: "Some Info"}]
	}
});

module.exports = mongoose.model('Locations', locationSchema);