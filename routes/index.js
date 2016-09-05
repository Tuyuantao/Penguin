var express = require('express');
var router = express.Router();
var db = require("./userdb");

var cookieParser = require('cookie-parser');

/* GET home page. */

router.use(cookieParser());
router.get('/', function(req, res, next) {

  console.log(req.cookies);
  if(req.cookies.username != null && req.cookies.username != "undefinded") {
    db.find("user", res);
  } else {
    res.render('index', { docs: '{}' });
  }


});

router.post("/", function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  // console.log(req.body.username);
  console.log("username: " + username);
  console.log(password);

  if(username != null && username != "undefined"){
    console.log("in");
    if(db.find("user", username, res)){
      console.log("in in in");
      res.cookie('username', username, {maxAge: 60*1000} );
      res.redirect('/login');
      db.find("user", res);
    }
    res.render('index', { docs: '{}' });
  }
  res.render('index', { docs: '{}' });
});

module.exports = router;
