const pathUtils = require('../utils/songPathUtils');
const genre = '80s';

const tracks = [
    {
        song: pathUtils.constructSongPath('bad', genre),
        art: pathUtils.constructArtPath('michael-jackson-bad.jpg', genre),
        artist: 'Michael Jackson',
        title: 'Bad',
    },
    {
        song: pathUtils.constructSongPath('caribbean-queen', genre),
        art: pathUtils.constructArtPath('billy-ocean-caribbean-queen.jpg', genre),
        artist: 'Billy Ocean',
        title: 'Caribbean Queen',
    },
    {
        song: pathUtils.constructSongPath('computer-love', genre),
        art: pathUtils.constructArtPath('zapp-and-roger.jpg', genre),
        artist: 'Zapp and Roger',
        title: 'Computer Love',
    },
    {
        song: pathUtils.constructSongPath('dont-wanna-fall-in-love', genre),
        art: pathUtils.constructArtPath('jane-child.jpg', genre),
        artist: 'Jane Child',
        title: 'Don\'t Wanna Fall In Love',
    },
    {
        song: pathUtils.constructSongPath('everybody-have-fun-tonight', genre),
        art: pathUtils.constructArtPath('wang-chung.jpg', genre),
        artist: 'Wang Chung',
        title: 'Everybody Have Fun Tonight',
    },
    {
        song: pathUtils.constructSongPath('faith', genre),
        art: pathUtils.constructArtPath('george-michael-faith.jpeg', genre),
        artist: 'George Michael',
        title: 'Faith',
    },
    {
        song: pathUtils.constructSongPath('i-ran', genre),
        art: pathUtils.constructArtPath('flock-of-seagulls.jpg', genre),
        artist: 'Flock of Seagulls',
        title: 'I Ran',
    },
    {
        song: pathUtils.constructSongPath('in-the-air-tonight', genre),
        art: pathUtils.constructArtPath('phil-collins.jpg', genre),
        artist: 'Phil Collins',
        title: 'In the Air Tonight',
    },
    {
        song: pathUtils.constructSongPath('jessies-girl', genre),
        art: pathUtils.constructArtPath('rick-springfield.jpg', genre),
        artist: 'Rick Springfield',
        title: 'Jessie\'s Girl',
    },
    {
        song: pathUtils.constructSongPath('nothing-compares-to-you', genre),
        art: pathUtils.constructArtPath('sinead-o-connor.jpeg', genre),
        artist: 'Sinéad O\'Connor',
        title: 'Nothing Compares 2U',
    },
    {
        song: pathUtils.constructSongPath('oh-shiela', genre),
        art: pathUtils.constructArtPath('ready-for-the-world.jpg', genre),
        artist: 'Ready For The World',
        title: 'Oh Sheila!',
    },
    {
        song: pathUtils.constructSongPath('she-drives-me-crazy', genre),
        art: pathUtils.constructArtPath('fyc.jpg', genre),
        artist: 'Fine Young Cannibals (FYC)',
        title: 'She Drives Me Crazy',
    },
    {
        song: pathUtils.constructSongPath('sunglasses-at-night', genre),
        art: pathUtils.constructArtPath('corey-hart.jpg', genre),
        artist: 'Corey Hart',
        title: 'Sunglasses at Night',
    },
    {
        song: pathUtils.constructSongPath('sweet-child-of-mine', genre),
        art: pathUtils.constructArtPath('guns-n-roses.jpg', genre),
        artist: 'Guns \'n Roses',
        title: 'Sweet Child of Mine',
    },
    {
        song: pathUtils.constructSongPath('sweet-dreams-are-made-of-this', genre),
        art: pathUtils.constructArtPath('eurythmics-sweet-dreams.jpg', genre),
        artist: 'Eurythmics',
        title: 'Sweet Dreams Are Made of This',
    },
    {
        song: pathUtils.constructSongPath('the-breaks', genre),
        art: pathUtils.constructArtPath('kurtis-blow.jpeg', genre),
        artist: 'Kurtis Blow',
        title: 'These Are the Breaks',
    },
    {
        song: pathUtils.constructSongPath('whats-love-got-to-do-with-it', genre),
        art: pathUtils.constructArtPath('tina-turner.jpg', genre),
        artist: 'Tina Turner',
        title: 'What\'s Love Got To Do With It',
    },
];

const getMusic = function() {
    return new Promise((resolve) => resolve(tracks));
};

module.exports = getMusic;
