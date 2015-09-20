var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/towns-demo');
var townsCollection = db.get('towns');

router.get('/maine', function(req, res, next){	
	townsCollection.find({state: "ME"}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/newhampshire', function(req, res, next) {
	townsCollection.find({state: "NH"}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/vermont', function(req, res, next) {
	townsCollection.find({state: "VT"}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/massachusetts', function(req, res, next) {
	townsCollection.find({state: "MA"}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/connecticut', function(req, res, next) {
	townsCollection.find({state: "CT"}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/newyandj', function(req, res, next) {
  townsCollection.find({fullstate: "New York and New Jersey"}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/pennsylvania', function(req, res, next) {
	townsCollection.find({state: "PA"}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/maryland', function(req, res, next) {
	townsCollection.find({state: "MD"}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/westvirginia', function(req, res, next) {
	townsCollection.find({state: "WV"}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/virginia', function(req, res, next) {
	townsCollection.find({state: "VA"}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/tennandncaro', function(req, res, next) {
	townsCollection.find({fullstate: "Tennessee and North Carolina"}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

router.get('/georgia', function(req, res, next) {
	townsCollection.find({state: "GA"}, function (err, data){
		res.render('pages/states', {towns: data});
	});
});

module.exports = router;
