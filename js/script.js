/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const promoAdv = document.querySelectorAll('.promo__adv img'), 
      backGround = document.querySelector('.promo__bg'),
      promoGenre = backGround.querySelector('.promo__genre'),
      
      promoFilmList = document.querySelector('.promo__interactive-list');




promoAdv.forEach(item => {
    item.remove();
})



promoGenre.textContent = 'драма';

backGround.style.backgroundImage = "url('../img/bg.jpg')";

promoFilmList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((movie, index) => {
    promoFilmList.innerHTML += `
    <li class="promo__interactive-item">${index+1} ${movie}
        <div class="delete"></div>
    </li>
    
    `;
});




