// ******************************Деструктуризація масива***************************************\\
// const arr = [1, 2, 3, 4, 5];








// ******************************Деструктуризація об'єкта***************************************\\
// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }






// ************************Глибока деструктуризація об'єкта***************************************\\

// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }









// *********************Деструктуризація об'єкта в параметрах функції******************************\\

// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }


// *********Без деструктуризації
// function getUserName(obj) {
//     console.log(`Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`);
// }

// getUserName(user)




// *********З деструктуризацією
// function getUserName() {
//     console.log(`Hello my name is ${name}, I know html - ${html}, css - ${css} and js -${js}`);
// }

// getUserName(user)









// *************************Деструктуризація об'єкта в циклі***********************************\\

// const users = [{ name: 'Kate' }, { name: 'Alex' }, { name: 'Mark' }];


// ********Без деструктуризації*******
// const names = [];

// for (const user of users) {
//     names.push(user.name)
// }

// console.log(names);



// ********З деструктуризацією*********
// const names = [];

// for (const  of users) {
//     names.push()
// }

// console.log(names);








// *************************Операція rest та spread********************************\\

// const numbers = [1, 2, 3];
// const copy = [...numbers]; //spread



// const numbers = [1, 2, 3];
// const [first, ...args] = numbers; // rest




// ************Операція rest та spread в функціях********************************\\

// const numbers = [1, 2, 3];

// function foo(...props){//rest

// }
// foo(...numbers)// spread




// const names = ['Alice', 'Kate', 'Emma'];

// function foo(first, second, third) {
//     console.log('first', first);
//     console.log('second', second);
//     console.log('third', third);
// }


// foo(...names) // foo('Alice', 'Kate', 'Emma')// spread





// function foo(first, second, ...args) { //rest
//     console.log(first);
//     console.log(second);
//     console.log(args);
// }

// foo('Alice', 'Kate', 'Emma', 'Mia', 'Lily')





// const user = {
//     name: 'Test name',
//     age: 22,
//     city: 'Lviv',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }



// function foo({ name, age, ...props }) {
//     console.log(name);
//     console.log(age);
//     console.log(props);
// }
// foo(user)




// function foo({ name, skills: { html, ...props }, ...props2}) {
//     console.log(name);
//     console.log(html);
//     console.log(props);
//     console.log(props2);
// }
// foo(user)







// Task - 1 - Деструктуризація
// Деструктуризуй об'єкт таким чином щоб отримати значення name, surname, username

// const user = {
//     id: 1,
//     username: 'harry_potter',
//     profile: {
//       name: 'Harry',
//       surname: 'Potter',
//       age: 25
//     }
//   };

// Деструктуризація об'єкта для отримання окремих змінних
// const ......


// Виведення отриманих значень
// console.log(`Ім'я користувача: ${name}`);
// console.log(`Прізвище користувача: ${surname}`);
// console.log(`Ім'я користувача (за нікнеймом): ${username}`);





// Task - 2 Деструктуризація
// Допиши функцію таким чином щоб кожна властивість об'єкта product була незалежним параметром

// const product = {
//     name: 'Smart TV',
//     price: 25000,
//     category: 'Electronics',
//     details: {
//       brand: 'Samsung',
//       color: 'Black',
//       weight: '15.5'
//     }
//   };

// function displayProductInfo() {
//     console.log(`Назва товару: ${name}`);
//     console.log(`Ціна: ${price} грн`);
//     console.log(`Категорія: ${category}`);
//     console.log('Деталі:');
//     console.log(`- Бренд: ${brand}`);
//     console.log(`- Колір: ${color}`);
//     console.log(`- Вага: ${weight} кг`);
// }

// displayProductInfo(product);





// Task - 3 - Операція spread
// Напиши функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.



// function createContact(partialContact) {

// }

// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );





// Task - 4 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// function transformUsername() {

// }



// console.log(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendCount: 40,
//     }),
// );


// console.log(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@hotmail.com',
//         friendCount: 20,
//     }),
// );





// Task - 5 Об'єкт параметрів
// Необхідно зрoбити рефакторинг функції calculateHousePerimeter, так щоб вона приймала об'єкт з параметрами будинку, включаючи довжини сторін будинку. Функція повинна розрахувати та повернути периметр будинку.

// function calculateHousePerimeter(a, b, c, d) {
//     const perimeter = a + b + c + d
//     return perimeter;
// }


// const perimeter = calculateHousePerimeter(10, 15, 10, 15);
// console.log(`Периметр будинку: ${perimeter}`);