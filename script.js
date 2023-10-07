let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
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


function detectPersonalLevel() {
    if (personalMovieDB.count >= 1 && personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов.');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель.');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман.');
    } else {
        alert('Произошла ошибка.');
    }
}

detectPersonalLevel();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();

//----------------------------------------------------------
//Practice 2;

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
// do {
//     let str = prompt('Один из просмотренных фильмов?', '');
//     if (!str || str.length > 50) continue;
//     let value = prompt('На сколько оцените его?', '');
//     personalMovieDB.movies[str] = value;
//     personalMovieDB.count--;
// } while (personalMovieDB.count)

//----------------------------------------------------------
