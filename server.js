var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var db = require('./src/models');
var MPController = require('./src/controllers/MusicPlayerController');
var routes = require('./src/controllers/router');

var port = process.env.PORT || 8080;

var MusicPlayerController;

app.use(express.static(__dirname + '/public'));
app.get('/', routes);

io.on('connection', function(socket) {
    console.log('a user connected!');

    socket.on('join', function(data) {
        console.log(data);
        var mpControllerConfig = {
            io: io,
        };

        MusicPlayerController = new MPController({ socket: socket });
        MusicPlayerController.init();

        socket.emit('messages', 'Hello from server');
    });

    // socket.on('player-server-message', function(data) {
    //     console.log('Player Server Msg Received: ', data);
    // });
});

// NOTE Take a closer look at
db.sequelize.sync({}).then(function() {
    http.listen(port, function() {
        console.log("Listening on PORT " + port);
    });
});

// var express = require('express');
// var app = express();
// var server = require('http').createServer(express);
// var io = require('socket.io')(server);
// var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
// var routes = require("./src/controllers/router");
// var db = require('./src/models');
//
// var port = process.env.PORT || 3000;
//
// app.use(express.static(process.cwd() + '/public'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(methodOverride("_method"));
// app.use("/", routes);
//
//
// NOTE Tak a closer look at
// db.sequelize.sync({}).then(function(){
// 	server.listen(port, function() {
// 			console.log("Listening on PORT " + port);
// 	});
// });
