'use strict';
module.exports = function (app) {
	var location = require('../controllers/locationController');
	var content = require('../controllers/contentController');

	//location routes
	app.route('/locations')
		.get(location.list_all_locations)
		.post(location.create_location);

	app.route('/locations/:location_name')
		.get(location.get_location)
		.put(location.update_location)
		.delete(location.delete_location);

	//content routes
	app.route('/content')
		.get(content.list_all_content)
		.post(content.create_content);

	app.route('/content/:content_name')
		.get(content.get_content)
		.put(content.update_content)
		.delete(content.delete_content);
}