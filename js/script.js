"use strict";



//const obj = {
	//name: 'John',
///age: 25,
	//isMarried: false
//};

// console.log(obj.name);

// console.log(obj["name"]);

//let arr = ['plum.png', 'prange.jpg', 'apple.bmp'];
// console.log(arr[0]);

//alert('Hello');

//const result = confirm(' Are you here');
//console.log (result);

// const answer = +prompt('Вам есть 18?', '18');
// console.log (answer + 5);

//const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша Фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

//console.log (typeof(answers));
//console.log (typeof(null));

//const user = 'Ivan';

//alert (`Hello, ${user}`);

//console.log('arr' + ' - object');
//.log(4 + +'5');

// incr = 10,
	//decr = 10;
	
//++incr;
//--decr;

//console.log (++incr);
//.log (--decr);

//console.log (5%2);

//console.log (2*4 === '8');


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: {},
	privar: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
	  b = prompt('На сколько оцените его?', ''),
	  c = prompt('Один из последних просмотренных фильмов?', ''),
	  d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log (personalMovieDB);