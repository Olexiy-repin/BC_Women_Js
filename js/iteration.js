/*
 * for...in, Object.keys, Object.values
 */

//? Отримайте суму зарплат усіх працівників
// Через for...in
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let total = 0;

// for (const key in salaries) {
//   total += salaries[key];
// }

// console.log(total);

// Через Object.keys() та for..of
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let total = 0;

// const keysArr = Object.keys(salaries);

// for (const key of keysArr) {
//   total += salaries[key];
// }

// console.log(total);

// Через Object.values() та for..of
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let total = 0;

// const valuesArr = Object.values(salaries);

// console.log(valuesArr);

// for (const value of valuesArr) {
//   total += value;
// }

// console.log(total);
