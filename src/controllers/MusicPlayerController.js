var musicService = require('../services/musicService');

const MusicPlayerController = function(params) {
    // 'params' should contain socket.io reference for communication with
    // client side logic.
    this.socket = params && params.socket;
    // Defaults
    this.musicList;
    this.currentTrackIdx = 0;

    this.init = function() {
        // Setup broadcast listener for music player
        if (this.socket) {
            this.socket.on('player-server-message', this.handleMusicPlayerMsgReceived.bind(this));
        }
    };

    // Handle Music Player Message Received
    this.handleMusicPlayerMsgReceived = function(data) {
        console.log('Received Message from client: ', data.msg);

        switch (data.msg) {
            case 'player-ready':
                this.handlePlayerReady(data.config);
                break;
            case 'player-next':
                var nextTrackIdx = this.currentTrackIdx + 1;

                this.handlePlayNextTrack(nextTrackIdx);
                break;
            case 'player-prev':
                var prevTrackIdx = this.currentTrackIdx - 1;

                this.handlePlayPrevTrack(prevTrackIdx);
                break;
            case 'player-change-genre':
                this.handleChangeGenre(data.config);
                break;
            default:
                console.log('Received Message from client: ', data.msg);
        }
    };

    // Handle Player Ready
    this.handlePlayerReady = function(config) {
        console.log('config: ', config);
        if (config && config.genre) {
            this.getMusicList(config.genre).then((resp) => {
                this.musicList = resp.slice();
                this.setCurrentTrack(config.trackIdx);
            });
        }
    };

    // Handle Change Genre
    this.handleChangeGenre = function(config) {
        if (config && config.genre) {
            this.getMusicList(config.genre).then((resp) => {
                this.musicList = resp.slice();
                this.setCurrentTrack(config.trackIdx);
            });
        }
    }

    // Handle Play Next Track
    this.handlePlayNextTrack = function(nextTrackIdx) {
        // Check to make sure nextTrackIdx does not exceed
        // tracks in the this.musicList array.
        if (nextTrackIdx <= (this.musicList.length - 1)) {
            this.setCurrentTrack(nextTrackIdx);
        } else {
            this.setCurrentTrack(0);
        }
    }

    // Handle Play Next Track
    this.handlePlayPrevTrack = function(prevTrackIdx) {
        // Check to make sure prevTrackIdx does not exceed
        // tracks in the this.musicList array.
        if (prevTrackIdx > -1) {
            this.setCurrentTrack(prevTrackIdx);
        } else {
            this.setCurrentTrack(this.musicList.length - 1);
        }
    }

    // Get Music List
    this.getMusicList = function(genre) {
        return musicService.getMusicByGenre(genre);
    }

    // Set Current Track
    this.setCurrentTrack = function(trackIdx) {
        var currentTrack = this.musicList[trackIdx];
        // console.log('currentTrack: ', currentTrack);
        var clientMsg = {
            msg: 'set-track',
            config: {
                currentTrack: currentTrack,
            },
        };

        this.socket.emit('player-client-message', clientMsg);
        this.currentTrackIdx = trackIdx;
    };
};

module.exports = MusicPlayerController;
