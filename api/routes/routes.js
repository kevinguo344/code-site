'use strict';

module.exports = function(app) {
	var locationList = require('../controllers/locationController');
	var itemList = require('../controllers/itemController');

	app.route('/api/locations')
		.get(locationList.list_all_locations)
		.post(locationList.create_a_location);

	app.route('/api/locations/:locId')
		.get(locationList.read_a_location_byID)
		.put(locationList.update_a_location_byID)
		.delete(locationList.delete_a_location_byID);

	app.route('/api/locations/:name.:format?')
		.get(locationList.read_a_location_byName)
		.put(locationList.update_a_location_byName)
		.delete(locationList.delete_a_location_byName);

	app.route('/api/items')
		.get(itemList.list_all_items)
		.post(itemList.create_item);

	app.route('/api/items/:itemId')
		.get(itemList.read_item_byID)
		.put(itemList.update_item_byID)
		.delete(itemList.delete_item_byID);

	app.route('/api/items/:name.:format?')
		.get(itemList.read_item_byName)
		.put(itemList.update_item_byName)
		.delete(itemList.delete_item_byName);
}