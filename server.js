//base code from: https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;

var Location = require('./api/models/locModel');
var Content = require('./api/models/contentModel');

app.set("view engine", "ejs");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/locdb', { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/static", express.static(__dirname + "/static"));

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/search', function(req, res) {
	res.render('search');
});

var routes = require('./api/routes/routes');
routes(app);

app.use(function(req, res) {
	res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);
console.log("Started api at port: " + port);