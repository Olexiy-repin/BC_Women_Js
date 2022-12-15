/*
 * Функції з побічними ефектами та чисті функції
 */
//! Dirty function
// const numbers = [1, 2, 3, 4, 5];

// const pushNumbers = (...args) => {
//   numbers.push(...args);
// };

// pushNumbers(9, 6, 8);

// console.log(numbers);

//? Clear function
// const numbers = [1, 2, 3, 4, 5];

// const pushNumbers = (array, ...args) => {
//   const numbersCopy = [...array];

//   numbersCopy.push(...args);

//   return numbersCopy;
// };

// const updatedNumbers = pushNumbers(numbers, 9, 6, 8);

// console.log(numbers);
// console.log(updatedNumbers);

//! Dirty function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = arr => {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] *= 2;
//   }
// };

// doubleMulti(numbers);

// console.log(numbers);

//? Clear function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = arr => {
//   const arrCopy = [...arr];

//   for (let i = 0; i < arrCopy.length; i += 1) {
//     arrCopy[i] *= 2;
//   }

//   return arrCopy;
// };

// const numbersCopy = doubleMulti(numbers);

// console.log(numbers);
// console.log(numbersCopy);
