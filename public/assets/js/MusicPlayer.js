var MusicPlayer = function(params) {
    // 'params' should contain socket.io reference for communication with
    // server side logic
    this.socket = params && params.socket;
    // Defaults
    this.genre = '80s'; // Accepted values: '80s', '90s', '2000s'
    this.paused = false; // For pausing/starting music
    this.seekIsDragging = false;
    this.track; // Used for storing current track
    this.audioEl = document.createElement('audio');
    this.audioEl.setAttribute('class', 'native-audio-player');
    this.audioEl.setAttribute('id', 'native-audio-player');

    // Get DOM Elements
    // -- Genre Buttons
    this.genreButtons = document.querySelectorAll('.player-ui__genre-option');
    // -- Album Cover DOM
    this.albumCoverDOM = document.getElementById('player-ui__album-cover');
    // -- Page BG DOM
    this.pageBGDOM = document.getElementById('page-bg');
    // -- Track Seek
    this.trackSeek = document.getElementById('player-ui__seek');
    // -- Track Seek
    this.trackTitleDOM = document.getElementById('song-title');
    // -- Player Controls
    this.controlsContainer = document.querySelector('.player-ui__controls-container');
    this.prevBtn = document.getElementById('controls-previous');
    this.playPauseBtn = document.getElementById('controls-play-pause');
    this.nextBtn = document.getElementById('controls-next');
    // this.audioPlayer = new Audio();
    this.audioEl.preload = 'metadata';
    // Insert Audio Player into the page.
    this.controlsContainer.appendChild(this.audioEl);

    // Testing JS Audio API
    // this.audioEl.src = ['../assets/songs/80s/bad.mp3'];
    // this.audioEl.addEventListener('loadeddata', () => {
    //     console.log('data loaded!');
    //     console.log('readyState: ', this.audioEl.readyState);
    //     console.log('audioEl: ', this.audioEl.readyState);
    // });
    // this.trackSeek.max = this.audioEl.duration;
    // this.audioEl.play();
    // setTimeout(() => {
    //     this.audioPlayer.src = '../assets/songs/80s/caribbean-queen.mp3';
    //     this.audioPlayer.play();
    // }, 3000);


    // Init
    this.init = function() {
        // Setup event listeners
        // -- Genre Buttons
        for (let i = 0; i < this.genreButtons.length; i++) {
            this.genreButtons[i].addEventListener('change', this.handleGenreChange.bind(this));
        }

        // -- Controls
        this.prevBtn.addEventListener('click', this.handlePrevClick.bind(this));
        this.playPauseBtn.addEventListener('click', this.handlePlayPauseClick.bind(this));
        this.nextBtn.addEventListener('click', this.handleNextClick.bind(this));

        // -- Track Seek
        this.trackSeek.addEventListener('input', this.handleTrackSeekChange.bind(this));

        // Setup broadcast listener for music player
        if (this.socket) {
            var serverMsg = {
                msg: 'player-ready',
                config: {
                    genre: '80s',
                    trackIdx: 0,
                },
            };
            this.socket.on('player-client-message', this.handleMusicPlayerMsgReceived.bind(this));
            this.socket.emit('player-server-message', serverMsg);
        }
    }

    // Handle Music Player Message Received
    this.handleMusicPlayerMsgReceived = function(data) {
        console.log('Received Message from server: ', data.msg);

        switch (data.msg) {
            case 'set-track':
                this.setCurrentTrack(data.config && data.config.currentTrack);
                break;
            default:
                console.log('Received Message from server: ', data.msg);
        }
    }

    // Handle Genre Changed
    this.handleGenreChange = function(e) {
        if (e) {
            var genre = e.target.value;
            var serverMsg = {
                msg: 'player-change-genre',
                config: {
                    genre: genre,
                    trackIdx: 0,
                },
            };

            this.socket.emit('player-server-message', serverMsg);
        }

        console.log('Genre Changed: ', e.target.value);
    }

    // Handle Genre Changed
    this.handleTrackSeekChange = function(e) {
        this.seekIsDragging = true;
        var newTime = e.target.value;
        console.log('Track Seek Changed: ', newTime);
        this.audioEl.currentTime = newTime;
        this.seekIsDragging = false;
    }

    // Handle Previous Click
    this.handlePrevClick = function(e) {
        var serverMsg = {
            msg: 'player-prev',
        };

        this.socket.emit('player-server-message', serverMsg);
    }

    // Handle Play/Pause Click
    this.handlePlayPauseClick = function(e) {
        console.log('clicked');
        this.playPauseBtn.classList.toggle('pause');
        this.playPauseBtn.classList.toggle('play');
        if (this.paused) {
            this.audioEl.play();
            this.paused = false;
        } else {
            this.audioEl.pause();
            this.paused = true;
        }
    }

    // Handle Next Click
    this.handleNextClick = function() {
        var serverMsg = {
            msg: 'player-next',
        };

        this.socket.emit('player-server-message', serverMsg);
    }

    // Handle Track Ended
    this.handleTrackEnded = function() {
        this.handleNextClick();
    }

    // Handle Time Update
    this.handleTimeUpdate = function() {
        if (!this.seekIsDragging) {
            var currentTime = parseInt(this.audioEl.currentTime, 10);
            this.trackSeek.value = currentTime;
        }
    }

    // Handle Track Metadata Loaded
    this.handleMetaDataLoaded = function() {
        console.log('metadata loaded!');
        this.trackSeek.max = this.audioEl.duration;
    }

    // Set Track Title
    this.setTrackTitle = function(title) {
        this.trackTitleDOM.innerHTML = title;
    }

    // Set Song Art
    this.setSongArt = function(art) {
        // console.log('art: ', art);
        this.albumCoverDOM.style.backgroundImage = "url('" + art + "')";
        this.pageBGDOM.style.backgroundImage = "url('" + art + "')";
    }

    // Set Current Track
    this.setCurrentTrack = function(track) {
        // console.log('track: ', track);
        // Clone data to this.track;
        this.track = Object.assign({}, track);
        // Construct the track title.
        var title = track.title + ' - ' + track.artist;

        if (track.song) {
            this.audioEl.src = track.song;
            this.audioEl.play();
        }

        this.setTrackTitle(title);
        this.setSongArt(track.art);
        this.paused = false;
    }

    // Add event listeners to Audio element.
    this.audioEl.addEventListener('timeupdate', this.handleTimeUpdate.bind(this));
    this.audioEl.addEventListener('loadedmetadata', this.handleMetaDataLoaded.bind(this));
    this.audioEl.addEventListener('ended', this.handleTrackEnded.bind(this));
};
