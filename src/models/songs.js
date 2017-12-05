
module.exports = function (sequelize, Sequelize) {
	var Songs = sequelize.define('song', {
  		song_name: Sequelize.STRING,
  		artist_name: Sequelize.STRING,
  		play:Sequelize.STRING
	});

	return Songs;
}