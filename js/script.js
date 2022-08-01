'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?'),
      b = prompt('На сколько оцените его?');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('hi');
    } else {
      console.log('erroe');
      i--;
    }
  }
}
// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
  } else {
    alert('Вы классический зритель');
  }
}

// detectPersonalLevel();

function showMyDB(hiden) {
  if (!hiden) {
    console.log(personalMovieDB);
  }
}

showMyDB(numberOfFilms.privat);

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `"Ваш любимый жанр под номером ${i}"`
    );
  }
}
writeYourGenres();

console.log(personalMovieDB);
