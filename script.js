// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (this.count == null || this.count == '' || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        this.detectPersonalLevel();
    },
    detectPersonalLevel() {
        if (this.count >= 1 && this.count < 10) {
            alert('Просмотрено довольно мало фильмов.');
        } else if (this.count >= 10 && this.count < 30) {
            alert('Вы классический зритель.');
        } else if (this.count > 30) {
            alert('Вы киноман.');
        } else {
            alert('Произошла ошибка.');
        }
        this.rememberMyFilms();
    },
    rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из просмотренных фильмов?', '').trim(),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
        this.toggleVisibleMyDB();
    },
    showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB() {
        this.privat = !this.privat;
        this.writeYourGenres();
    },
    writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            this.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (this.genres[i - 1] == null || this.genres[i - 1] == '') {
                console.log('Вы ввели некорректные данные или не ввели их вовсе.');
                i--;
            }
        }

        this.genres.forEach((item, index) => {
            console.log(`Любимый жанр # ${index + 1} - это ${item}`);
        })
    }
};

personalMovieDB.start();

console.log(personalMovieDB);

// function detectPersonalLevel() {
//     if (personalMovieDB.count >= 1 && personalMovieDB.count < 10) {
//         alert('Просмотрено довольно мало фильмов.');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         alert('Вы классический зритель.');
//     } else if (personalMovieDB.count > 30) {
//         alert('Вы киноман.');
//     } else {
//         alert('Произошла ошибка.');
//     }
// }

// detectPersonalLevel();

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из просмотренных фильмов?', '').trim(),
//             b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

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
