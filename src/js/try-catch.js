/*
 * Помилки фази інтерпретації(compile time) обробити неможливо. Тільки помилки фази виконання(runtime).
 * try/catch працюю тільки з синхроним кодом.
 */

console.log('Start!');

setTimeout(() => {
  try {
    const user = {};

    user = [];
  } catch (err) {
    console.log(err);
  }
}, 0);

console.log('End!');
