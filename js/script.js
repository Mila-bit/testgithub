"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};


for (let i = 1; i < 3; i++) {
	let a = prompt('Один из последних просмотренных фильмов?', ''),
		b = prompt('На сколько вы его оцените', '');
	
	if (a == null || b == null || a.length == '' || b.length == '' || a.length > 50 || b.length > 50 ) {
	i--;
	}
	personalMovieDB.movies[a] = b;
}

if (personalMovieDB.count < 10 ) {
	alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
	alert('Вы киноман');
} else {
	alert('Произошла ошибка')
}

console.log(personalMovieDB);
