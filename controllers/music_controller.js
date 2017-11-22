var express = require("express");

var router = express.Router();

var song = require("../models/music.js");

router.get('/', function(req, res){
  music.selectAll(function(data){
    var hbsObject = {
      songs: data
    };
    res.render('index', hbsObject);
  });
});

router.post("/", function(req, res) {
  song.insertOne([
    "song_name", "play"
  ], [
    req.body.song_name, req.body.play
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  music.updateOne({
    play: req.body.play
  }, condition, function() {
    res.redirect("/");
  });
});

module.exports = router;
