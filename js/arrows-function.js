/*
 * Стрілочні функції, явне - неявне повернення, arguments, повернення об`єкта
 */

//? Два і більше параметрів
// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(10, 20));

//? Один параметр
// const greet = firstName => {
//   console.log(`Hello ${firstName}!`);
// };

// greet('Oleksii');

//? Без параметрів
// const greet = () => {
//   console.log('Hello!');
// };

// greet();

//? arguments
// const sum = (...args) => {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3, 4));

//? Неявне повернення
// const sum = (a, b) => a + b;

// console.log(sum(10, 20));

// const createProduct = product => ({ id: Date.now(), ...product });

// console.log(createProduct({ firstName: 'Jennie', lastName: 'Malone', age: 30 }));

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/
// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };

//   callback(product);
// };

// const logProduct = product => console.log(product);
// const logTotalPrice = product => console.log(product.price * product.quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/
// const each = (array, callback) => {
//   // let callback = function (value) {
//   //   return value * 2;
//   // }

//   const newArr = [];

//   for (const el of array) {
//     newArr.push(callback(el));
//   }

//   return newArr;
// };

// Повна версія
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return value * 2;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return value - 10;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return Math.sqrt(value);
//   })
// );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], value => {
//     return Math.ceil(value);
//   })
// );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], value => {
//     return Math.floor(value);
//   })
// );

// Скорочена версія
// console.log(each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));
