"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};


function rememberMyFilms() {
	for (let i = 1; i < 3; i++) {
		let a = prompt('Один из последних просмотренных фильмов?', ''),
			b = prompt('На сколько вы его оцените', '');
		
		if (a == null || b == null || a.length == '' || b.length == '' || a.length > 50 || b.length > 50 ) {
		i--;
		}
		personalMovieDB.movies[a] = b;
	}
}

rememberMyFilms();


function detectPersonalLevel() {
	if (personalMovieDB.count < 10 ) {
		alert('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		alert('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		alert('Вы киноман');
	} else {
		alert('Произошла ошибка')
	}
}

detectPersonalLevel();

function showMyDB(hidden) {
	(personalMovieDB.privat == false) 
	? console.log(personalMovieDB) 
	: false;
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i < 4; i++) {
		personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}?`, ''));
	}
}

writeYourGenres();