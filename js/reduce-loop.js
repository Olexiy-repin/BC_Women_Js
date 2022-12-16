/*
 *  Метод reduce()
 */

// масив.reduce((previousValue, element, index, array) => {
// Тіло колбек-функції
// }, initialValue);

/*
? Порахуємо суму масива чисел
*/
// reduce з початковим значення акумулятора
// const numbers = [1, 2, 3, 4, 5];
// /*
// 1 ітерація
// acc = 0;
// el = 1;
// idx = 0;
// arr = [1, 2, 3, 4, 5];

// 2 ітерація
// acc = 1;
// el = 2;
// idx = 1;
// arr = [1, 2, 3, 4, 5];

// 3 ітерація
// acc = 3;
// el = 3;
// idx = 2;
// arr = [1, 2, 3, 4, 5];

// 4 ітерація
// acc = 6;
// el = 4;
// idx = 3;
// arr = [1, 2, 3, 4, 5];

// 5 ітерація
// acc = 10;
// el = 5;
// idx = 4;
// arr = [1, 2, 3, 4, 5];

// Після 5 ітерації
// acc = 15;

// */
// const total = numbers.reduce((acc, el, idx, arr) => {
//   return acc + el;
// }, 0);

// console.log(total);

// reduce без початкового значення акумулятора
// const numbers = [1, 2, 3, 4, 5];
// /*
// 1 ітерація
// acc = 1;
// el = 2;
// idx = 1;
// arr = [1, 2, 3, 4, 5];

// 2 ітерація
// acc = 3;
// el = 3;
// idx = 2;
// arr = [1, 2, 3, 4, 5];

// 3 ітерація
// acc = 6;
// el = 4;
// idx = 3;
// arr = [1, 2, 3, 4, 5];

// 4 ітерація
// acc = 10;
// el = 5;
// idx = 4;
// arr = [1, 2, 3, 4, 5];

// Після 4 ітерації
// acc = 15;
// */
// const total = numbers.reduce((acc, el, idx, arr) => {
//   return acc + el;
// });

// console.log(total);
/*
? Нехай функція getTotalAmount повертає загальну кількість автомобілів(значення властивості amount).
*/
const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
];

const getTotalAmount = allCars => {
  return allCars.reduce((acc, el, idx, arr) => {
    return acc + el.amount;
  }, 0);
};

console.log(getTotalAmount(cars));
