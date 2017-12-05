var hostURL = 'http://' + window.location.host;
var socket = io.connect(hostURL);

socket.on('connect', function(data) {
    socket.emit('join', 'Hello World from client!');
});

socket.on('messages', function(data) {
    console.log(data);
})


var DropTunePlayer = new MusicPlayer({ socket: socket });
DropTunePlayer.init();

// function addClass( element, classname ) {
// if (element.classList)
//   element.classList.add(classname);
// else
//   element.className += ' ' + classname;
// }
//
// function removeClass( classname, element ) {
//     var cn = element.className;
//     var rxp = new RegExp( "\\s?\\b"+classname+"\\b", "g" );
//     cn = cn.replace( rxp, '' );
//     element.className = cn;
// }
//
// var progressBarEl = document.getElementById("progress-bar");
// var controlsPlayEl = document.getElementById("controls-play");
//
// function play() {
//   addClass(progressBarEl, "play");
//   addClass(controlsPlayEl, "play");
// }
