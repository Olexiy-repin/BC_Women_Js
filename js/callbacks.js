/*
 * Колбек-функції, функції вищого порядку
 */

// const greet = function (callback) {
//   // let callback = function (firstName) {
//   //   console.log(`Hello ${firstName}`);
//   // };

//   const userName = prompt('Ваше імʼя');

//   callback(userName);
// };

// const simpleGreet = function (firstName) {
//   console.log(`Hello ${firstName}`);
// };

// const prettyGreet = function (firstName) {
//   console.log(`Welcome ${firstName}! 🙋‍♂️`);
// };

// greet(simpleGreet);
// greet(prettyGreet);

//? Запит на сервер
// const fetchUser = async function (userUrl, callback) {
//   const response = await fetch(`https://api.github.com/users/${userUrl}`);
//   const result = await response.json();

//   callback(result);
// };

// const showInfoAboutUser = function (user) {
//   console.log(user);
// };

// fetchUser('olexiy-repin', showInfoAboutUser);

//? Реєстрація подій на сторінці
// const userEmail = document.querySelector('.js-contact-form-email');

// const logValues = function () {
//   console.log('Hi!');
// };

// userEmail.addEventListener('change', logValues);

/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву.
? Функція each повинна повернути новий масив, елементами якого будуть результати виклику колббека.
*/
// const numbers = [1, 2, 3, 4, 5];

// const each = function (array, callback) {
//   const newArray = [];

//   for (const item of array) {
//     newArray.push(callback(item));
//   }

//   return newArray;
// };

// const multi = function (el) {
//   return el * 2;
// };

// const add = function (el) {
//   return el + 2;
// };

// console.log(each(numbers, multi));
// console.log(each(numbers, add));

/*
? Напишіть такі функції:
? createProduct(product, callback) - приймає об'єкт товару без id, а також колбек-функцію.
? Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор до властивості id і викликає колбек передаючи йому створений об'єкт.
? logProduct(product) - коллбек, що приймає об'єкт продукту і логує його в консоль
? logTotalPrice(product) - коллбек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
*/
const createProduct = function (product, callback) {
  const newProduct = {
    id: Date.now(),
    ...product,
  };

  callback(newProduct);
};

const logProduct = function (product) {
  console.log(product);
};

const logTotalPrice = function ({ price, quantity } = {}) {
  console.log(`Total price: ${price * quantity}`);
};

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍎', price: 30, quantity: 3 }, logTotalPrice);

createProduct({ name: '🍋', price: 20, quantity: 5 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
