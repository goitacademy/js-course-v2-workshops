// Function expression








// Function declaration
// hoisting https://codeguida.com/post/199











// Псевдомасив arguments











// Області видимості, присвоєння за посиланням та значенням

// // Example 1
// let someValue = 4;

// if (true) {
//     someValue = 11;
// }

// console.log(someValue);



// // Example 2
// let someValue = 4;

// if (true) {
//     let someValue = 11;
// }

// console.log(someValue);



//// Example 3
// let someValue = 4;

// if (true) {
//     if (true) {
//         someValue = 24;
//     }
//     let someValue = 11;
// }

// console.log(someValue);



// // Example 4
// let someValue = 2;


// function checkScope(someValue) { // let someValue = 2
//     someValue = 45;
//     return someValue;
// }

// checkScope(someValue)

// console.log(someValue);


// Example 5
// let someValue = 2;


// function checkScope() {
//     someValue = 45;
//     return someValue;
// }

// checkScope(someValue)

// console.log(someValue);



// // Example 6
// let someValue = 2;


// function checkScope() {
//     someValue = 42;
//     return someValue;
// }

// checkScope()

// console.log(someValue);



// Example 7
// let someArray = ['Hello', 'my', 'name', 'scope'];


// function checkScope(arr) {
//     arr.splice(0,3)
// }

// checkScope(someArray)

// console.log(someArray);

// let someArray = ['Hello', 'my', 'name', 'scope'];



// function checkScope(arr) {
//     arr = Array.from(arr)
//     arr.splice(0,3)
// }

// checkScope(someArray)

// console.log(someArray);












// Практика



// Task-1;
// Створи функцію яка буде перевіряти чи кожен елемент масиву більше ніж вказане значення. Функція приймає два параметри.
// 1 - Масив чисел
// 2 - Число яке потрібно порівнювати з усіма елементами масиву.
// Функція повертає повідомлення про успішну або не успішну перевірку (повідомлення "Success ✅" "Fail ❌")

// const numbers = [25, 12, 67, 40, 18];

// function checkValue() {
//
// }

// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 13));




// Застосування функції + патерн раннє повернення

// const numbers = [25, 12, 67, 40, 18];

// function checkValue(arr, target) {
//
// }

// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 13));







// Task-2
// Створити функцію яка буде розбивати початковий масив на потрібну кількість елементів розділюячи на декілька масивів.Функція приймає 2 параметри
// 1 - масив значень
// 2 - потрібну кількість елементіа в масиві
//  Функція повертає масив масивів


// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getCombination(arr, count) {
//
// }
// console.log(getCombination(data, 2)); // [[1, 2], [3, 4],[5, 6],[7, 8]]
// console.log(getCombination(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]









// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//
// }

// console.log(getRectArea('8 11'));
// console.log(getRectArea('15 11'));







// Task-4
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// function addCourse(name) {

// }

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse('CSS')); // 'Ви вже маєте такий курс'






// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// function removeCourse(name) {
//
// }
// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse('Vue')); // 'Курс із таким ім'ям не знайдено'






// const courses = ['HTML', 'CSS', 'Express','JavaScript', 'React', 'PostgreSQL'];
// function updateCourse(oldName, newName) {
//
// }






// updateCourse('HTML', 'NestJS');
// console.log(updateCourse('qwerty', 'NestJS'));
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
