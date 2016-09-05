var express = require('express');
var router = express.Router();
var db = require("./userdb");

var cookieParser = require('cookie-parser');

/* GET home page. */

router.use(cookieParser());
router.get('/', function(req, res, next) {
    res.render('login', { docs: '{}' });
});

router.post("/", function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    // console.log(req.body.username);
    console.log("username: " + username);
    console.log(password);

    if(username != null && username != "undefined"){
        console.log("in");
        // if(db.find("user", username)){
        //     console.log("in in");
        //     console.log("---" + res);

            res.cookie('username', username, {maxAge: 5*1000} );
            res.redirect('./');
            // res.send("test");
            // db.find("user", res);
        // }
        // res.render('index', { docs: '{}' });
    }
    // res.render('index', { docs: '{}' });
});

module.exports = router;
