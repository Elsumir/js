'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');

    while (
      personalMovieDB.count == '' ||
      personalMovieDB.count == null ||
      isNaN(numberOfFilms)
    ) {
      personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count > 30) {
      alert('Вы киноман');
    } else {
      alert('Вы классический зритель');
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      let genre = prompt(
        `Введите ваши любимые жанры через запятую`
      ).toLowerCase();
      if (genre === '' || genre === null) {
        console.log('no');
        i--;
      } else {
        personalMovieDB.genres = genre.split(', ');
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`"Любимый жанр ${i + 1} - это ${item}"`);
    });
  }
};
