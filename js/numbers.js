/*
 * Математичні оператори (+, -, *, /, %, **)
 */

/*
 ? Дано два числа 20 та 10.
 ? Проведіть над цими числами математичні операції (+ - / * %).
*/
// const numA = 18;
// const numB = 5;

// const sum = numA + numB;
// console.log(sum);

// const division = numA / numB;
// console.log(division);

// const multiply = numA * numB;
// console.log(multiply);

// const subtraction = numA - numB;
// console.log(subtraction);

// const remainder = numA % numB;
// console.log(remainder);

//? Перевірте чи парні числа 15, 20, 45, 30.
// const numA = 15;
// console.log(numA % 2);

// const numB = 20;
// console.log(numB % 2);

// const numC = 45;
// console.log(numC % 2);

// const numD = 30;
// console.log(numD % 2);

/*
  ? Дано 90 хвилин, дізнайтеся скільки в цьому числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/
// const totalMinutes = 90;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// console.log(hours);
// console.log(minutes);

/*
 * Number, Number.parseInt(), Number.parseFloat()
 */

/* 
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/
// const num = Number(prompt('Введіть якесь число.'));

// console.log(num);

//? Даний рядок '24px', дістаньте з цього рядка ціле число.
// const str = '24px';

// console.log(Number.parseInt(str));

//? Даний рядок '25.5%', дістаньте з цього рядка дробове число.
// const str = '25.5%';

// console.log(Number.parseFloat(str));

//? Спробуйте призвести до числа, строку 'abc'.
// const str = 'abc';

// console.log(Number.parseFloat(str));

//? Запросіть у користувача ввести два числа, складіть їх та виведіть результат у консоль.
// const numA = Number(prompt('Введіть перше число'));
// const numB = Number(prompt('Введіть друге число'));

// const result = numA + numB;

// console.log(result);

/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow().
 */

/*
  ? Дано число 23.5, застосуйте до нього різноманітні методи заокруглення.
  ? Протестуйте на числах, 23.3, 23.9
*/
// const number = Math.round(23.5);

// console.log(number);

// const max = Math.min(20, 10, -1, -100, 100);

// console.log(max);

/*
  ? Попросіть користувача ввести число та ступінь.
  ? Зведіть число до ступеня і виведіть результат у консоль.
*/
// const num = 2;
// const pow = 5;

// console.log(num ** pow);
