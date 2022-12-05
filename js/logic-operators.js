/*
 * Логічні оператори (&& || !)
 */

//* && - запинається на брехні
//* Якщо операнд був преведенний до false, то повертається значення цього операнду.
//* Якщо всі операнди були приведені до true, то повертається значення останнього операнду.
// const result = 10 && 'Hello' && 20;

// console.log(result);

//* || - запинається на правді
//* Якщо операнд був преведенний до true, то повертається значення цього операнду.
//* Якщо всі операнди були приведені до false, то повертається останній.
// const result = 0 || '' || null;

// console.log(result);

//* ! - інвертує правду до брехні, а брехню до правди

// console.log(!'');

//? Логічні оператори
// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0);
// console.log(null || (2 && 3) || 4);
