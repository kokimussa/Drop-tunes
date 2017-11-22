var orm = require("../config/orm.js");

var song = {
  selectAll: function(cb) {
    orm.selectAll("songs", function(res) {
      cb(res);
    });
  },
  
  insertOne: function(cols, vals, cb) {
    orm.insertOne("songs", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("songs", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = song;


