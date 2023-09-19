const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count >= 1 && personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов.');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель.');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман.');
} else {
    alert('Произошла ошибка.');
}

// First loop
// for (let i = 1; i <= personalMovieDB.count; i++) {
//     let str = prompt('Один из просмотренных фильмов?', '');
//     while (!(str) || str.length > 50) {
//         str = prompt('Один из просмотренных фильмов?', '');
//     }
//     let value = prompt('На сколько оцените его?', '');
//     personalMovieDB.movies[str] = value;
// }

// Second loop

// while (personalMovieDB.count) {
//     let str = prompt('Один из просмотренных фильмов?', '');
//     if (!str || str.length > 50) continue;
//     let value = prompt('На сколько оцените его?', '');
//     personalMovieDB.movies[str] = value;
//     personalMovieDB.count--;
// }


//Third loop
do {
    let str = prompt('Один из просмотренных фильмов?', '');
    if (!str || str.length > 50) continue;
    let value = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[str] = value;
    personalMovieDB.count--;
} while (personalMovieDB.count)

console.log(personalMovieDB);