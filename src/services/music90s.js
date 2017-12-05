const pathUtils = require('../utils/songPathUtils');
const genre = '90s';

const tracks = [
    {
       song: pathUtils.constructSongPath('jump-around', genre),
       art: pathUtils.constructArtPath('house-of-pain.jpg', genre),
       artist: 'House of Pain',
       title: 'Jump Around',
    },
    {
        song: pathUtils.constructSongPath('bulls-on-parade', genre),
        art: pathUtils.constructArtPath('rage-against-the-machine.jpeg', genre),
        artist: 'Rage Against the Machine',
        title: 'Bulls On Parade',
    },
    {
        song: pathUtils.constructSongPath('diamonds-and-pearls', genre),
        art: pathUtils.constructArtPath('prince.jpg', genre),
        artist: 'Prince',
        title: 'Diamonds and Pearls',
    },
    {
        song: pathUtils.constructSongPath('hold-on', genre),
        art: pathUtils.constructArtPath('wilson-phillips.jpg', genre),
        artist: 'Wilson Phillips',
        title: 'Hold On',
    },
    {
        song: pathUtils.constructSongPath('i-wish', genre),
        art: pathUtils.constructArtPath('skeelo.jpeg', genre),
        artist: 'Skeelo',
        title: 'I Wish',
    },
    {
        song: pathUtils.constructSongPath('kiss-from-a-rose', genre),
        art: pathUtils.constructArtPath('seal.jpg', genre),
        artist: 'Seal',
        title: 'Kiss From a Rose',
    },
    {
        song: pathUtils.constructSongPath('losing-my-religion', genre),
        art: pathUtils.constructArtPath('rem.jpg', genre),
        artist: 'REM',
        title: 'Losing My Religion',
    },
    {
        song: pathUtils.constructSongPath('no-ordinary-love', genre),
        art: pathUtils.constructArtPath('sade.jpg', genre),
        artist: 'Sade',
        title: 'No Ordinary Love',
    },
    {
        song: pathUtils.constructSongPath('otherside', genre),
        art: pathUtils.constructArtPath('rhcp.jpg', genre),
        artist: 'Red Hot Chili Peppers',
        title: 'Otherside',
    },
    {
        song: pathUtils.constructSongPath('set-adrift-on-memory-bliss', genre),
        art: pathUtils.constructArtPath('pm-dawn.jpg', genre),
        artist: 'P.M. Dawn',
        title: 'Set Adrift on Memory Bliss',
    },
    {
        song: pathUtils.constructSongPath('someday', genre),
        art: pathUtils.constructArtPath('mariah-carey.jpg', genre),
        artist: 'Mariah Carey',
        title: 'Someday',
    },
    {
        song: pathUtils.constructSongPath('teen-spirit', genre),
        art: pathUtils.constructArtPath('nirvana.jpg', genre),
        artist: 'Nirvana',
        title: 'Teen Spirit',
    },
    {
        song: pathUtils.constructSongPath('poison', genre),
        art: pathUtils.constructArtPath('bbd.jpg', genre),
        artist: 'Bell Biv Devoe',
        title: 'Poison',
    },
];

const getMusic = function() {
    return new Promise((resolve) => resolve(tracks));
};

module.exports = getMusic;
