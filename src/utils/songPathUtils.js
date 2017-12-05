const folderRoot = '../assets/';
const songArtPath = folderRoot + 'img/';
// const songPath = folderRoot + 'songs/';

const constructSongPath = (songName, genre) => {
    const songPath = folderRoot + 'songs/' + genre + '/' + songName + '.mp3';
    return songPath;
};

const constructArtPath = (artName, genre) => {
    const artPath = folderRoot + 'img/' + genre + '/' + artName;
    return artPath;
};

module.exports = {
    constructSongPath: constructSongPath,
    constructArtPath: constructArtPath,
};
