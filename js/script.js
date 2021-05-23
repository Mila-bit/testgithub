"use strict";

const numberofFilms = prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
	count: numberofFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function questions () {
	let nameOfFilm = prompt('Один из последних просмотренных фильмов?', '');
	personalMovieDB.movies[nameOfFilm] = prompt('На сколько вы его оцените', '');

}
questions();
questions();

console.log(personalMovieDB);