var express = require('express');
var router = express.Router();
var db = require('../configs/db.config');

router.get("/signin",(req, res, next) => {
    let username = req.query.username;
    let password = req.query.password;
    
    db.query("select * from donor where username = ? and password = ?",[username,password],(err,results) => {
        if(err) throw err;
        if(results.length > 0) {
            req.session.username = username;
            res.json({"success":true,"message":"Login Success"})
        } else {
            res.json({"success":true,"message":"Username or Password is Invalid"});
        }
    });
});

router.get("/logout",(req,res,next) => {
    req.session.username = null;
    res.redirect('../../home');
});

module.exports = router;