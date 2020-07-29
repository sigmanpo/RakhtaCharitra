var express = require('express');
var router = express.Router();
var db = require('../configs/db.config');

router.post("/signin",(req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    
    db.query("select * from donor where username = ? and password = ?",[username,password],(err,results) => {
        if(err) throw err;
        if(results.length > 0) {
            req.session.username = username;
            res.status(200).json({"success":true,"message":"Login Success"})
        } else {
            res.status(401).json({"success":false,"message":"Username or Password is Invalid"});
        }
    });
});

router.post("/signup",(req,res,next) => {
    let fullname = req.body.fullname;
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let phone = req.body.phone;
    let dob = req.body.dob;
    let bloodgroup = req.body.bloodgroup;
    let gender = req.body.gender;
    let state = req.body.state;
    let pincode = req.body.pincode;
    let city = req.body.city;
    let area = req.body.area;

    db.query("insert into donor values(null,?,?,?,?,?,?,?,?,?,?,?,?)",
    [fullname,username,password,email,phone,dob,bloodgroup,gender,state,pincode,city,area],
    (err,results) => {
        if(err) {
            if(err.errno == 1062) res.json({"success":false,"message":"Username already Registered"});
            if(err.errno == 1048) res.status(400).json({"message":"Required Fields must be filled"});
            
        }
        if(results) {
            res.json({"success":true,"message":"Registration Successfull"});
        }
    });
});

router.get("/logout",(req,res,next) => {
    req.session.username = null;
    req.session.destroy();
    res.redirect('../../home');
});

module.exports = router;