var express = require('express');
var router = express.Router();
var db = require("./userdb");

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  db.find("user", res);
});

module.exports = router;
