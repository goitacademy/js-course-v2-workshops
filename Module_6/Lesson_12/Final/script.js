// *********Подія сlick********* \\
// Натискаючи на кнопку "Click me" змусь червоний квадратик зміщуватись на 50px по діагоналі

// const clickMe = document.querySelector(".js-click");
// const box = document.querySelector(".js-box");

// clickMe.addEventListener("click", handlerClick);
// box.addEventListener("click", handlerClick);

// let step = 0;
// function handlerClick() {
//   step += 50;
//   box.style.marginTop = `${step}px`;
//   box.style.marginLeft = `${step}px`;
// }





// *********Подія input********* \\
// Виводь в консоль все що користувач вводить в input

// const userName = document.querySelector(".js-user-name");

// userName.addEventListener("input", handlerInput);

// function handlerInput(evt) {
//   console.log(evt.currentTarget.value);
// }





// *********Подія blur********* \\
// Користувач вводить в input своє ім'я після втрати фокусу отримує alert з вітальним повідомленням

// const userName = document.querySelector(".js-user-name");

// userName.addEventListener("blur", handlerGreeting);

// function handlerGreeting(evt) {
//   const name = evt.currentTarget.value;

//   alert(`${name}, I\`m very glad to see you`);
// }





// *********Подія submit********* \\
// Опрацюй форму та збери фідбек користувача в об'єкт

// const form = document.querySelector(".js-form");
// form.addEventListener("submit", handlerSubmit);

// function handlerSubmit(evt) {
//   evt.preventDefault();
//   console.dir(evt.currentTarget);
//   const { comment, email, password } = evt.currentTarget.elements;

//   const info = {
//     email: email.value,
//     password: password.value,
//     comment: comment.value,
//   };

//   console.log(info);
// }





// *********Подія keydown / keyup / keypress********* \\
// document.addEventListener('keydown', handlerKey);

// function handlerKey(evt) {
//   console.log(evt.code);
//   if (evt.code === "Escape") {
//     console.log("😂");
//   } else {
//     console.log("😴");'
//   }
// }





// *********Обробка комбінацій клавіш********* \\
// document.addEventListener("keydown", handlerKey);

// function handlerKey(evt) {
//   if (evt.ctrlKey && evt.code === "KeyC") {
//     evt.preventDefault();
//   }
// }





// ***************Практика************** \\
// Реалізуй пошук автомобілів по сайту
// Користувач потрапляє на сайт і одразу бачить форму для пошуку і картки всіх автомобілів (масив cars)
// Користувач може ввести в форму назву Марки або Моделі авто і в тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
// Після натискання кнопки пошуку (сабміт форми) відмалюй авто які збігаються з критеріями пошуку

// const cars = [
//   {
//     id: 1,
//     car: "Audi",
//     type: "A6",
//     price: 30000,
//     img: "https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg",
//   },
//   {
//     id: 2,
//     car: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     id: 3,
//     car: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     id: 4,
//     car: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     id: 5,
//     car: "Honda",
//     type: "Accord",
//     price: 20000,
//     number: "+380000000000",
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 6,
//     car: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];

// const elements = {
//   form: document.querySelector(".js-form"),
//   container: document.querySelector(".js-list"),
// };

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ id, car, type, price, img }) => `
//       <li class="car-card" data-id="${id}">
//         <img src="${img}" alt="${type}" class="car-image">
//         <h2 class="car-title">${car}</h2>
//         <h3 class="car-type">${type}</h3>
//         <span class="car-price">${price} $</span>
//       </li>`
//     )
//     .join("");
// }

// elements.container.style.display = "flex";
// elements.container.style.flexWrap = "wrap";
// elements.container.style.gap = "25px";
// elements.container.insertAdjacentHTML("beforeend", createMarkup(cars));
// elements.form.addEventListener("submit", handlerSearch);

// function handlerSearch(evt) {
//   evt.preventDefault();

//   const { options, query } = evt.currentTarget.elements;

//   const result = cars
//     .filter((item) =>
//       item[options.value].toLowerCase().includes(query.value.toLowerCase())
//     )
//     .sort((a, b) => a[options.value].localeCompare(b[options.value]));

//   elements.container.innerHTML = createMarkup(result);
// }
