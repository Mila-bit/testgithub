"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: {},
	privar: false
};

for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', ''),
		  b = prompt('На сколько оцените его?', '');
		  

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log ('Done');
	} else {
		console.log ('Error');
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log ('Просмотрено довольно мало фильмо');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
	console.log ("Вы классический зритель");
} else if (personalMovieDB.count >= 30){
	  console.log ("Вы гуру кинопоиска");
} else {
	console.log ("Error");
}

console.log (personalMovieDB);

function showFirstMessage() {
	console.log("Hello world");
}

showFirstMessage();

//function calc (a, b){
//	return (a + b);
//}

//console.log(calc(4, 3));
//console.log(calc(5, 6));
//console.log(calc(7, 8));
//console.log(calc(9, 10));

function ret () {
	let num = 50;
	return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
	console.log("Hello");
};

logger();

const calc = (a, b) => a + b;

const str = "tesr";

// console.log(str[2]);

console.log(str.toUpperCase());
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "Hello World";

console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const number = 12.2;
console.log(Math.round(number));

const testing = "12.2px";
console.log(parseInt(testing));
console.log(parseFloat(testing));
