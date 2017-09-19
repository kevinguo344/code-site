//base code from: https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

var express = require('express'),
	app = express(),
	port = process.env.PORT || 8080;

app.listen(port);
console.log("Started api at port: " + port);