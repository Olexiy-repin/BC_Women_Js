// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!

//? Приведення типів
// console.log(2 + 5 + '' + 1 + 0);
// console.log('' + 1 - 0);
// console.log(true + false);
// console.log(6 / '3');
// console.log('2' + '3');
// console.log(4 + 5 + 'px');
// console.log('$' + 4 + 5);
// console.log('4' - 2);
// console.log('4px' - 2);
// console.log(7 / 0);
// console.log('  -9  ' + 5);
// console.log(null + 1);
// console.log(6 + true);

// function greet() {
//   const number = 20;

//   if (true) {
//     console.log(number);
//   }
// }

// greet();

// function f1() {
//   console.log('f1');
//   f2();
// }

// function f2() {
//   console.log('f2');
//   f3();
// }

// function f3() {
//   console.log('f3');
// }

// f1();

// const number = 10;

// console.log(number);

String.prototype.toAlternatingCase = function () {
  let stringTransformed = '';

  for (let i = 0; i < this.length; i += 1) {
    if (this[i] === this[i].toLowerCase()) {
      stringTransformed += this[i].toUpperCase();
    } else {
      stringTransformed += this[i].toLowerCase();
    }
  }

  return stringTransformed;
};

const newStr = 'HeLLo WoRLD'.toAlternatingCase();

console.log(newStr);
