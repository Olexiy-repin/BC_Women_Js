/*
 *  Метод map()
 */

// масив.map((element, index, array) => {
//  Тіло колбек-функції
// });

//? Помножте всі числа на 2
// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = null;

/*
? Перепишіть цикл через map
? Код нижче отримує з масиву рядків новий масив, що містить їх довжини:
*/
// const wordsArr = ['Есть', 'жизнь', 'на', 'Марсе'];

// const getElementsLength = words => {
//   const wordsLengthArr = [];

//   for (const word of words) {
//     wordsLengthArr.push(word.length);
//   }

//   return wordsLengthArr;
// };

// console.log(getElementsLength(wordsArr)); // [4, 5, 2, 5]

/*
? Створіть масив значень Фаренгейта із масиву значень Цельсія
? Для переведення з Цельсій до Фаренгейтів потрібна формула. F = C * 1.8 + 32
*/
// const celsius = [-15, -5, 0, 10, 16, 20, 24, 32];
// const fahrenheits = null;

// console.log('celsius: ', celsius);
// console.log('fahrenheits: ', fahrenheits);

/*
? Нехай функція getModels повертає масив моделей (властивість model) всіх автомобілів.
*/
// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

/*
? Нехай функція makeCarsWithDiscount(cars, discount) повертає новий масив об'єктів із зміненим значенням властивості price
? залежно від переданої знижки.
*/

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.5));
