'use strict'

//условия if, тернарный оператор, break

if (NaN) {
    console.log('ok');
} else {
    console.log('error');
}



/*const num = 50;

    if (num < 49) {
    console.log('мало');
} else if (num > 100) {
    console.log ('много');
} else {
    console.log('правильно')
}

(num == 50) ? console.log('ok') : console.log('error');*/

const num = 51;

switch (num) {
    case 49:
        console.log('error');
        break;
    case 100:
        console.log('error');
        break;
    case 50:
        console.log('error');
    default:
        console.log('не в этот раз')
}

//циклы

let loopNum = 50

/*while (loopNum <= 55) {
    console.log(loopNum);
    loopNum++;
}*/

/*do {
    console.log(loopNum);
    loopNum++;
}
while (loopNum < 55);*/


let a = 50;

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break;
        continue;
    }
    console.log(i);
}

//примеры цикла 

/*Способ 1 функция
function questions () {
	let nameOfFilm = prompt('Один из последних просмотренных фильмов?', '');
	personalMovieDB.movies[nameOfFilm] = prompt('На сколько вы его оцените', '');

}
questions();
questions();*/

/*способ 2 цикл for
for (let i = 1; i < 3; i++) {
	let nameOfFilm = prompt('Один из последних просмотренных фильмов?', '');
	personalMovieDB.movies[nameOfFilm] = prompt('На сколько вы его оцените', '');
}*/


/* cпособ 3 цикл whole
let i = 1;
while (i < 3) {
	let nameOfFilm = prompt('Один из последних просмотренных фильмов?', '');
	personalMovieDB.movies[nameOfFilm] = prompt('На сколько вы его оцените', '');
	i++;
}*/

/*cпособ 4 цикл do...while
let i = 1;

do {
	let nameOfFilm = prompt('Один из последних просмотренных фильмов?', '');
	personalMovieDB.movies[nameOfFilm] = prompt('На сколько вы его оцените', '');
	i++;
} while ( i < 3);*/

//console.log(personalMovieDB);