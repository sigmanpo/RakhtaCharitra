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
// Donor
router.get('/donor', function(req, res, next) {
    if(req.session.username) 
      res.render('donor',{title:"Donor"});
    else 
      res.render('login',{title:"Login"});
});
// Search Donor
router.get('/search', function(req, res, next) {
  res.render('search',{title:'Search Donor'});
});
module.exports = router;
