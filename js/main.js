/*
 *  Масиви: літерал масива, елементи, індексація, довжина
 */

// const array = [12, 34, 'Hello!', true, null];

// console.log(array[2]);
// console.log(array[1]);

/*
? Створіть масив genres з елементами Jazz і Blues.
? Додайте "Rock&Roll" в кінець.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте «Country» та «Reggy» на початок масиву.
 */

// const genres = ['Jazz', 'Blues'];

// // genres[genres.length] = 'Rock&Roll';
// genres.push('Rock&Roll');
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// const deletedElement = genres.shift();
// console.log(deletedElement);

// genres.unshift('Country', 'Reggy');

// console.log(genres);

/*
 * Присвоєння за посиланням і за значенням
 */

/*
? Створіть змінну a = 10.
? Створіть та привласніть змінній b -> змінну a
? Виведіть до консолі обидві ці змінні
? Змініть значення змінної a і ще раз виведіть у консоль
*/

// let a = 10;
// const b = a;

// console.log('a ---> ', a);
// console.log('b ---> ', b);

// a = 20;

// console.log('a ---> ', a);
// console.log('b ---> ', b);

/*
? Створіть масив arr1 = [1, 2, 3].
? Створіть та привласніть масиву arr2 -> масив arr1
? Виведіть до консолі обидва цих масива
? Додайте елемент в масив arr1 і ще раз виведете обидва масиви в консоль
*/

// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// console.log('arr1 ---> ', arr1);
// console.log('arr2 ---> ', arr2);

// arr2.push(10);

// console.log('arr1 ---> ', arr1);
// console.log('arr2 ---> ', arr2);

/*
 * Перебор масива циклами for та for...of
 */

/*
? Напиши скрипт для перебору масиву fruits циклом for.
? Для кожного елемента масиву виведіть у консоль рядок у форматі номер_елемента: значення_елемента.
? Нумерація елементів має починатися з першого.
*/
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// console.log(fruits);

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

/*
? Напиши скрипт пошуку найменшого числа у масиві.
? Код має працювати для будь-якого масиву чисел.
? Використовуйте цикл для вирішення задачі.
*/
// Через цикл for
// const numbers = [2, 17, 94, 1, -20, -1, -100, 23, -40, 37, -50];
// let min = numbers[0];

// for (let i = 1; i < numbers.length; i += 1) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// console.log(numbers);
// console.log(min);

// Через цикл for...of
// const numbers = [2, 17, 94, 1, -20, -1, -100, 23, -40, 37, -50];
// let min = numbers[0];

// for (const el of numbers) {
//   if (el < min) {
//     min = el;
//   }
// }

// console.log(numbers);
// console.log(min);

/*
? У нас є масив із зарплатами працівників, потрібно порахувати загальну суму зарплат
*/

// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// for (const salary of salaries) {
//   // total = total + salary;
//   total += salary;
// }

// console.log(total);

/*
? У нас є кілька масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/
// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// let total = 0;

// for (const salary of managerSalaries) {
//   total += salary;
// }

// for (const salary of developersSalaries) {
//   total += salary;
// }

// console.log(total);

/*
 * Базові методи: split та join, indexOf та includes, push, slice та splice, concat
 */

/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються в змінній values у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/
// const values = '8 11';
// const valuesArr = values.split(' ');

// const area = Number(valuesArr[0]) * Number(valuesArr[1]);

// console.log(values);
// console.log(valuesArr);
// console.log(area);

/*
? Напиши скрипт, який виводить в консоль ім'я та телефонний номер користувача.
? У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами.
? Порядковий номер імен та телефонів у рядках вказують на відповідність.
? Кількість імен та телефонів гарантовано однакова.
*/
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

/*
? Напиши скрипт, який «розгортає» рядок (зворотний порядок букв)
? та виводить її в консоль.
*/
// 1 Варіант
// const string = 'Welcome to the future';
// const charsArr = string.split('');
// const reversedCharsArr = [];

// console.log(charsArr);

// for (let i = charsArr.length - 1; i >= 0; i -= 1) {
//   reversedCharsArr.push(charsArr[i]);
// }

// const reversedString = reversedCharsArr.join('');

// console.log(string);
// console.log(reversedString);

// 2 Варіант
// const string = 'Welcome to the future';
// let reversedString = '';

// for (let i = string.length - 1; i >= 0; i -= 1) {
//   reversedString += string[i];
// }

// console.log(string);
// console.log(reversedString);

/*
? У нас є масив співробітників, Співробітник Shaw звільнився, видаліть його з масиву
*/
// const employees = ['Dennis', 'Watkins', 'Shaw', 'Ray'];
// const idxOfShaw = employees.indexOf('Shaw');

// employees.splice(idxOfShaw, 1);

// console.log(employees);

//? Додати нового співробітника Thornton, перед Watkins;
// const idxOfWatkins = employees.indexOf('Watkins');

// employees.splice(idxOfWatkins, 0, 'Thornton');

// console.log(employees);
