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

const arrDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];
const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];