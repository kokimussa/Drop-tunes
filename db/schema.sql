CREATE DATABASE music_db;
USE music_db;

CREATE TABLE songs
(
	id int NOT NULL AUTO_INCREMENT,
	song_name varchar(100) NOT NULL,
	artist_name varchar(100) NOT NULL,
	play BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);