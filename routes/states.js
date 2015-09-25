var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/towns-demo');
var townsCollection = db.get('towns');
var gearCollection = db.get('gear');

router.get('/maine', function(req, res, next){	
	townsCollection.find({state: "ME"}, {sort: {statenum: 1}}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/newhampshire', function(req, res, next) {
	townsCollection.find({state: "NH"}, {sort: {statenum: 1}}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/vermont', function(req, res, next) {
	townsCollection.find({state: "VT"}, {sort: {statenum: 1}}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/massachusetts', function(req, res, next) {
	townsCollection.find({state: "MA"}, {sort: {statenum: 1}}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/connecticut', function(req, res, next) {
	townsCollection.find({state: "CT"}, {sort: {statenum: 1}}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/newyandj', function(req, res, next) {
  townsCollection.find({fullstate: "New York and New Jersey"}, {sort: {statenum: 1}}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/pennsylvania', function(req, res, next) {
	townsCollection.find({state: "PA"}, {sort: {statenum: 1}}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/maryland', function(req, res, next) {
	townsCollection.find({state: "MD"}, {sort: {statenum: 1}}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/westvirginia', function(req, res, next) {
	townsCollection.find({state: "WV"}, {sort: {statenum: 1}}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/virginia', function(req, res, next) {
	townsCollection.find({state: "VA"}, {sort: {statenum: 1}}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/tennandncaro', function(req, res, next) {
	townsCollection.find({fullstate: "Tennessee and North Carolina"}, {sort: {statenum: 1}}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/georgia', function(req, res, next) {
	townsCollection.find({state: "GA"}, {sort: {statenum: 1}}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/gear', function(req, res, next) {
	gearCollection.find({}, function(err, data){
	res.render('pages/gear', {gear: data})
	});
});

module.exports = router;
