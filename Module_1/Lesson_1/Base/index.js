/***** Оголошення змінних *****/
// const;


// let;







/***** Примітивні типи даних ****/

// Number


// String


// Типи рядків '' "" ``


// Boolean (true, false)


// undefined


// null


// перевірка типу даних з яким працюємо метод typeof








/***** Комунікація з користувачем та можливість відображення якогось результату *****/
// console.log('Привіт вчи JS');

// alert('Привіт вчи JS')

// const message = prompt("Введіть і'мя")
// console.log(message);

// const result = confirm('Будеш вчити JS ?');
// console.log(result);









/***** Основні оператори *****/

// >
// console.log(25 > 21);

// <
// console.log(25 < 24);

// ==
// console.log('false' == 0);
// console.log(false == 0);

// ===
// console.log('25' === 25);

// <=
// console.log(24 <= 25);
// console.log(25 <= 25);

// >=
// console.log(26 >= 20);
// console.log(26 >= 26);


// !=
// console.log('1' != 1);


// !==
// console.log('1' !== 1);



// Приклади роботи

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('a' < 'aAbBc');

// console.log('Papaya' === 'papaya');









/***** Значення які завжди будуть конвертовані до false (Обов'язково!!!) *****/

//  0 (число нуль)
// console.log(Boolean(0));
// // "" (порожній рядок)
// console.log(Boolean(''));
// // NaN
// console.log(Boolean(NaN));
// // undefined
// console.log(Boolean(undefined));
// // null
// console.log(Boolean(null));
// // false
// console.log(Boolean(false));








/***** Логічні оператори *****/

// ||
// console.log(2 || 0 || 1);

// ?? реагує лише на null та undefined
// console.log(0 ?? 1);
// console.log(null ?? 1);
// console.log(undefined ?? 10);

// &&
// console.log(false && 1);
// console.log(NaN && 2);

// console.log(1 && 5 && 23);
// console.log(1 && 0 && 23);


// Приклади роботи

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log( 3 ||true || 4);

// console.log('' || false || 7);

// console.log(null || 2 || undefined);

// console.log('' ??  4);

// console.log(false ?? 7);

// console.log(null ?? 7);

// console.log(undefined ?? 7);







/***** Методи для роботки з числами (тип даних Number) *****/

// const str = '25.7a32px';

// Number.parseInt()
// console.log(Number.parseInt(str));


// Number.parseFloat()
// console.log(Number.parseFloat(str));


// Number.isNaN()  та метод isNaN()
// console.log(isNaN(num));


// const num = Number(str) // NaN
// console.log(Number.isNaN(num));





// const str = '25.7a32px';
// console.log(typeof str);
// console.log(Number.isNaN(str));// NaN //String
// console.log(isNaN(str)); //Number(str) => NaN



// Класс Math
// const value = 11.500
// console.log(Math.floor(value));

// console.log(Math.ceil(value));

// Math.round()
// console.log(Math.round(value));


// console.log(Math.pow(5, 4));
// console.log(5 ** 4);







/***** Методи та властивості для роботки з рядками (тип даних String) *****/

// const str = 'Hello world';

// length
// console.log(str.length);

// toLowerCase()
// console.log(str.toLowerCase());

// toUpperCase()
// console.log(str.toUpperCase());

// indexOf()
// console.log(str.indexOf(' '));
// console.log(str.indexOf('H'));

// includes
// console.log(str.includes('world'));

// endsWith()
// console.log(str.endsWith(' world'));

// startsWith()
// console.log(str.startsWith('h'));

// replace()
// console.log(str.replace('l', '🍕'));


// replaceAll()
// console.log(str.replaceAll('l','🍟'));

// slice()
// console.log(str.slice(0, str.length-1));
// console.log(str);







// **************************************** Практика ****************************** //

// Task - 1

// Виконавши математичні операції та застосувавши шаблоні рядки виведи в консоль кількість та загальну вартість за кожен продукт.

// const apple = '🍎';

// const appleQuantity = 8;

// const applePrice = 34;

// const  appleMessage = ``;
// console.log(appleMessage);


// const cherry = '🍒';

// const cherryQuantity = 3;

// const cherryPrice = 72;

// const cherryMessage = ``;

// console.log(cherryMessage);


// Task - 2

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 1441;

// const result = ``
// console.log(result);



// Task - 3

// Виконай рефакторинг коду щоб уникнути помилок

// const name = 'Harry'
// const message = `Hello my name is $(name)`
// console.log(message);

// const delivery = 25;
// const price = 190;
// const message = 'Total purchase, price ${delivery}  + price';
// console.log(message);


// Task - 4
// Виконай рефакторинг коду так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0. Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = 0;
// const defaultValue = 10;
// const value = null || defaultValue;
// console.log(value);