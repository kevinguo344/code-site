'use strict';

module.exports = function(app) {
	var locationList = require('../controllers/locationController');
	var itemList = require('../controllers/itemController');

	app.route('/api/locations')
		.get(locationList.list_all_locations)
		.post(locationList.create_a_location);

	app.route('/api/locations/:locId')
		.get(locationList.read_a_location)
		.put(locationList.update_a_location)
		.delete(locationList.delete_a_location);

	app.route('/api/locations/:name.:format?')
		.get(locationList.get_a_location);

	app.route('/api/item')
		.get(itemList.list_all_content)
		.post(itemList.create_content);

	app.route('/api/item/:itemId')
		.get(itemList.read_content)
		.put(itemList.update_content)
		.delete(itemList.delete_content);
}