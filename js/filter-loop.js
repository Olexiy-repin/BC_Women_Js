/*
 *  Метод filter()
 */

// масив.filter((element, index, array) => {
// Тіло колбек-функції
// });

/*
? Відфільтруйте масив, щоб залишилися тільки парні
*/
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = null;

// console.log('numbers: ', numbers);
// console.log('evenNumbers: ', evenNumbers);

/*
? Відфільтруємо масив, залишивши в ньому лише позитивні числа:
*/
// const numbers = [-2, 5, 1, -5, -1, 1, 0, 3, 4, -1];
// const positiveNumbers = null;

// console.log('numbers: ', numbers);
// console.log('positiveNumbers: ', positiveNumbers);

/*
? Відфільтруйте масив heroes за властивістю об'єкта franchise.
*/
// const heroes = [
//   { name: 'Batman', franchise: 'DC' },
//   { name: 'Ironman', franchise: 'Marvel' },
//   { name: 'Thor', franchise: 'Marvel' },
//   { name: 'Superman', franchise: 'DC' },
// ];

// const marvelHeroes = null;
// const dcHeroes = null;

// console.log('heroes: ', heroes);
// console.log('marvelHeroes: ', marvelHeroes);
// console.log('dcHeroes: ', dcHeroes);

/*
? Нехай функція filterByPrice повертає масив автомобілів ціна яких
? менше ніж значення параметра threshold.
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

// console.table(filterByPrice(cars, 25000));
// console.table(filterByPrice(cars, 30000));

/*
? Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.
*/

// console.table(getCarsWithDiscount(cars));

/*
? Нехай функція getCarsWithType повертає масив автомобілів, тип яких
? збігається із значенням параметра type.
*/

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));
// console.table(getCarsWithType(cars, 'truck'));
