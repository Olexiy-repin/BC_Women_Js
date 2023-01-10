/*
 * Проміси
 */

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomNumber = Math.random();

//     if (randomNumber > 0.5) {
//       resolve('Done!');
//     } else {
//       reject('Error');
//     }
//   }, 2000);
// });

// console.log(promise);

// promise
//   .then(data => {
//     console.log(promise);

//     console.log(data);

//     data += '!!!';

//     return data;
//   })
//   .then(newData => {
//     console.log(newData);
//   })
//   .catch(err => {
//     console.log(promise);

//     console.log(err);
//   })
//   .finally(() => {
//     console.log('Finaly');
//   });

//? конструктор new Promise(callback(resolve, reject));

//? then(onSuccess, onError)

//? ланцюжок промісів та catch(onError)

//? finally()

//? TASK 01
// Чи можна "перевиконати" проміс?
// const promise = new Promise((resolve, reject) => {
//   resolve(1);

//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// promise.then(result => {
//   console.log(result);
// });

//? TASK 02
// Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data); // '1'
//   })
//   .then(data => {
//     console.log(data); // undefined

//     return '2';
//   })
//   .then(data => {
//     console.log(data); // '2'
//   });

//? TASK 03
// Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error); // 'error'
//   });
