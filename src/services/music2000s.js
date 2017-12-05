const pathUtils = require('../utils/songPathUtils');
const genre = '2000s';

const tracks = [
    {
        song: pathUtils.constructSongPath('fallin', genre),
        art: pathUtils.constructArtPath('alicia-keys.jpg', genre),
        artist: 'Alicia Keys',
        title: 'Fallin',
    },
    {
        song: pathUtils.constructSongPath('gasolina', genre),
        art: pathUtils.constructArtPath('daddyyankee.jpeg', genre),
        artist: 'Daddy Yankee',
        title: 'Gasolina',
    },
    {
        song: pathUtils.constructSongPath('in-the-end', genre),
        art: pathUtils.constructArtPath('linkin-park.jpeg', genre),
        artist: 'Linkin Park',
        title: 'In the End',
    },
    {
        song: pathUtils.constructSongPath('one-more-time', genre),
        art: pathUtils.constructArtPath('daft-punk.jpg', genre),
        artist: 'Daft Punk',
        title: 'One More Time',
    },
    {
        song: pathUtils.constructSongPath('rock-your-body', genre),
        art: pathUtils.constructArtPath('justin-timberlake.jpg', genre),
        artist: 'Justin Timberlake',
        title: 'Rock Your Body',
    },
    {
        song: pathUtils.constructSongPath('show-me-what-you-got', genre),
        art: pathUtils.constructArtPath('jay-z.jpg', genre),
        artist: 'Jay-Z',
        title: 'Show Me What You Got',
    },
    {
        song: pathUtils.constructSongPath('smooth', genre),
        art: pathUtils.constructArtPath('santana.jpg', genre),
        artist: 'Santana',
        title: 'Smooth',
    },
    {
        song: pathUtils.constructSongPath('the-way-you-move', genre),
        art: pathUtils.constructArtPath('outkast.jpeg', genre),
        artist: 'Outkast',
        title: 'The Way You Move',
    },
    {
        song: pathUtils.constructSongPath('this-love', genre),
        art: pathUtils.constructArtPath('maroon5.jpg', genre),
        artist: 'Maroon 5',
        title: 'This Love',
    },
    {
        song: pathUtils.constructSongPath('try-again', genre),
        art: pathUtils.constructArtPath('aaliyah.jpg', genre),
        artist: 'Aaliyah',
        title: 'Try Again',
    },
    {
        song: pathUtils.constructSongPath('umbrella', genre),
        art: pathUtils.constructArtPath('rihanna.jpg', genre),
        artist: 'Rihanna',
        title: 'Umbrella',
    },
];

const getMusic = function() {
    return new Promise((resolve) => resolve(tracks));
};

module.exports = getMusic;
