// *****Встановлення збірки parcel-project-template*****
// https://github.com/goitacademy/parcel-project-template

// *****Перепідключення репозиторію*****
// git remote -v

// git remote set-url origin посилання на свій репозиторій

// git remote -v

// *****Налаштування конфігурацій файлу package.json*****


// *****Інсталювання залежностей збірки*****
// npm install


// *****Запуск збірки*****
// npm start


// *****Налаштування GitHub*****
// Надати read & write доступи


// *****Пуш на GitHub*****

// *****Налаштування GitHub Pages*****




// *****Навести приклади import/export*****

// Функції
// function add(a, b) {
//     console.log("value", value);
//     return a + b;
// }


// // Класи
// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }


// Якщо є час можна розглянути складну задачку
// потрібно створити функцію яка буде формувати чергу в магазині
// 1 перший параметр масив, кілікість елементів це кількість покіпців, значення елементу масиву це час який покупець витратить на касі
// 2 параметр це кількість кас
// Повертає обєкт де ключ це номер касси, значення це час черги на касі
// 12 + 2 + 15 = 29
// 3 + 5 + 6 + 7 = 21
// { 1 : 29, 2 : 21}



// function fn(arr, count) {
//     const obj = {};
//     for (let i = 1; i <= count; i += 1) {
//         obj[i] = 0;
//     }

//     arr.forEach(item => {
//         const values = Object.values(obj);
//         const min = Math.min(...values);
//         const idx = values.indexOf(min) + 1;
//         obj[idx] += item;
//     });
//     return obj;


//     // return arr.reduce((acc, item) => {
//     //     acc[Object.values(acc).indexOf(Math.min(...Object.values(acc))) + 1] += item;
//     //     return acc
//     // }, obj)
// }



// console.log(fn([12, 3, 5, 6, 2, 15, 7], 2));


// function fn(arr, count) {

// }



// console.log(fn([12, 3, 5, 6, 2, 15, 7], 2));