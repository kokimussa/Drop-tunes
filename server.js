var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

var db = require('./models');






var routes = require("./controllers/music_controller.js");

app.use("/", routes);


// NOTE Tak a closer look at 
db.sequelize.sync({})
	.then(function(){
		app.listen(port, function() {
  			console.log("Listening on PORT " + port);
		});
	});


