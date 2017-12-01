var express = require("express");

var router = express.Router();
var path = require('path');

var db = require("../models");

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/../views/index.html'));
});

router.post("/", function(req, res) {
 // TODO

 // db.song.create({})
});

router.put("/:id", function(req, res) {
  // TODO
});

module.exports = router;
