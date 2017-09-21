//base code from: https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
var Location = require('./api/models/locModel');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/locdb', { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/locRoutes');
routes(app);

app.listen(port);
console.log("Started api at port: " + port);