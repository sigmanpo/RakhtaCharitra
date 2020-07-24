var express = require('express');
var router = express.Router();

// Home page 
router.get('/', function(req, res, next) {
  res.render('index',{title:'The Online Blood Bank'});
});
// Home Page
router.get('/home', function(req, res, next) {
  res.render('index',{title:'The Online Blood Bank'});
});
// Donor page
router.get('/donor', function(req, res, next) {
  res.render('donor',{title:'Donor'});
});
// Search Donor
router.get('/search', function(req, res, next) {
  res.render('search',{title:'Search Donor'});
});
module.exports = router;
