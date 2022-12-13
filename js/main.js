/*
 * Операція spread замість concat і slice
 */

//* Копія масива
//* Через метод slice()
// const numbers = [1, 2, 3, 4, 5];
// const numbersCopy = numbers.slice();

// console.log('numbers: ', numbers);
// console.log('numbersCopy: ', numbersCopy);

// numbers[0] = 10;

// console.log('numbers: ', numbers);
// console.log('numbersCopy: ', numbersCopy);

//* Через метод concat()
// const numbers = [1, 2, 3, 4, 5];
// const numbersCopy = numbers.concat();

// console.log('numbers: ', numbers);
// console.log('numbersCopy: ', numbersCopy);

// numbers[0] = 10;

// console.log('numbers: ', numbers);
// console.log('numbersCopy: ', numbersCopy);

//* Через ...spread
// const numbers = [1, 2, 3, 4, 5];
// const numbersCopy = [30, ...numbers, 20];

// console.log(obj);

// console.log('numbers: ', numbers);
// console.log('numbersCopy: ', numbersCopy);

// numbers[0] = 10;

// console.log('numbers: ', numbers);
// console.log('numbersCopy: ', numbersCopy);

//* Об'єднання масивів
// const numbers = [1, 2, 3, 4];
// const anotherNumbers = [10, 9, 8, 7];
// const allNumbers = [100, ...numbers, 200, ...anotherNumbers, 400];

// console.log('numbers: ', numbers);
// console.log('anotherNumbers: ', anotherNumbers);
// console.log('allNumbers: ', allNumbers);

//* Розпилення масиву у функцію
// const numbers = [1, 2, 33, 4, 5];

// console.log(Math.max(...numbers));

/*
 * Операція spread замість Object.assign({}, obj)
 */
// Через Object.assign()
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };
// const userCopy = Object.assign({ gender: 'male' }, user);

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);

// user.age = 20;

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);

// Через ...spread
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };
// const userCopy = {
//   gender: 'male',
//   ...user,
//   firstName: 'Donald Pratt',
// };

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);

// user.age = 20;

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);

//* Розпилення складних типів
const user = {
  firstName: 'Jonathan',
  lastName: 'Barnett',
  age: 30,
  someArr: [1, 2, 3, 4],
};
const userCopy = _.cloneDeep(user);

console.log('user: ', user);
console.log('userCopy: ', userCopy);

user.someArr.push(10);

console.log('user: ', user);
console.log('userCopy: ', userCopy);

/*
 * Операція rest
 */

//? Напишіть функцію sum, яка складає довільну кількість аргументів

// const sum = function (...args) {
//   // let ...args = [1, 2, 3, 4, 5];
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(10, 20));
