const getMusic80s = require('./music80s');
const getMusic90s = require('./music90s');
const getMusic2000s = require('./music2000s');

const getMusicByGenre = function(genre) {
    switch (genre) {
        case '90s':
            return getMusic90s();
        case '2000s':
            return getMusic2000s();
        case '80s':
        default:
            return getMusic80s();
    }
}

module.exports = {
    getMusicByGenre: getMusicByGenre,
};
