'use strict';

module.exports = function(app) {
	var locationList = require('../controllers/locController');
	var contentList = require('../controllers/contentController');

	app.get('/', function(req, res) {
		res.send('Please use /api/...');
	});

	app.route('/api/locations')
		.get(locationList.list_all_locations)
		.post(locationList.create_a_location);

	app.route('/api/locations/:locId')
		.get(locationList.read_a_location)
		.put(locationList.update_a_location)
		.delete(locationList.delete_a_location);

	app.route('/api/content')
		.get(contentList.list_all_content)
		.post(contentList.create_content);

	app.route('/api/content/:contentId')
		.get(contentList.read_content)
		.put(contentList.update_content)
		.delete(contentList.delete_content);
}