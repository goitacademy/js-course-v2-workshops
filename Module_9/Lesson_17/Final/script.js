// Додатковий матеріал для самостійного ознайомлення
// Event loop documentation
// https://bool.dev/blog/detail/obyasnenie-event-loop-v-javascript-s-pomoshchyu-vizualizatsii
// https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif





// ***********setTimeout*********** \\

// const id = setTimeout(() => {
// console.log('Time is over');
// }, 1000)


// Видалення Timeout за необхідністю
// clearTimeout(id)


// Можливість передати параметри для колбеку
// const id = setTimeout((name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
// }, 1000, 'Alice', 'Ukraine')





// ***********setInterval*********** \\

// const id = setInterval(() => {
// console.log('setInterval');
// }, 1000)


// Видалення Timeout за необхідністю
// clearInterval(id)


// Можливість передати параметри для колбеку
// const id = setInterval((name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
// }, 1000, 'Alice', 'Ukraine')



// Приклад використання setInterval та setTimeout
// Створимо блок з рекламою яка зникне через 10 секунд

// const content = document.querySelector('.js-content')
// const text = document.querySelector('.js-text');

// let counter = 10
// text.textContent = `Залишилось ${counter} секунд`;

// const id = setInterval(() => {
//     counter -= 1;
//     text.textContent = `Залишилось ${counter} секунд`;
// }, 1000)


// setTimeout(() => {
//     clearInterval(id);
//     content.style.display = 'none'
// }, 1000 * counter)




// ***********Синхронний та асинхронний JavaScript*********** \\
// console.log('start');

// setTimeout(() => {
//     console.log(setTimeout);
// }, 0)

// console.log('finish');





// ***********Class Date*********** \\
// const currentDate = new Date()
// const targetDate = new Date('Sep 05 2023')


// console.log(targetDate - currentDate);





// Практика
// Потрібно створити два приклади годинника (Електронний та механічний)

const selectors = {
    day: document.querySelector('.date-day'),
    date: document.querySelector('.date'),
    month: document.querySelector('.date-month'),
    year: document.querySelector('.date-year'),
    clock: document.querySelector('.digital-clock'),
    seconds: document.querySelector('.clock-seconds__arrow'),
    minutes: document.querySelector('.clock-minutes__arrow'),
    hours: document.querySelector('.clock-hours__arrow')
}




const arrDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];
const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
setInterval(() => {
    const currentDate = new Date();

    const day = currentDate.getDay();
    const date = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const localTime = currentDate.toLocaleTimeString('uk-UA')

    selectors.day.textContent = arrDay[day];
    selectors.month.textContent = namesOfMonth[month];
    selectors.date.textContent = date;
    selectors.year.textContent = year;
    selectors.clock.textContent = `Поточний час ${localTime}`

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const secondDeg = 360 / 60 * seconds;
    const minutesDeg = 360 / 60 * minutes;
    const hoursDeg = 360 / 12 * hours + (360 / 12 / 60) * minutes;

    selectors.seconds.style.transform = `rotate(${secondDeg}deg)`;
    selectors.minutes.style.transform = `rotate(${minutesDeg}deg)`;
    selectors.hours.style.transform = `rotate(${hoursDeg}deg)`;


}, 1000)