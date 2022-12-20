/*
 * Ланцюжки прототипів.
 * Object.create().
 * obj.hasOwnProperty()
 */
const usersMethods = {
  getFirstName() {
    return this.firstName;
  },

  getUserAge() {
    return this.age;
  },
};

const user1 = Object.create(usersMethods);
user1.firstName = 'Oleksii';
user1.age = 40;

const user2 = Object.create(usersMethods);
user2.firstName = 'Aiden';
user2.age = 20;

const user3 = Object.create(usersMethods);
user3.firstName = 'Dominic';
user3.age = 30;

console.log('user1: ', user1);
console.log('user2: ', user2);
console.log('user3: ', user3);

console.log(user1.getFirstName());
console.log(user1.getUserAge());

console.log(user2.getFirstName());
console.log(user2.getUserAge());

console.log(user3.getFirstName());
console.log(user3.getUserAge());

// https://learn.javascript.ru/article/native-prototypes/native-prototypes-classes.svg

//* Власні та не власні властивості об'єкта

//* Перевірка власних властивостей obj.hasOwnProperty()

//* Цикл for...in, перебирає і власні, і не власні властивості.
// const user1 = {
//   firstName: 'Aiden',
//   age: 20,
// };

// const user2 = Object.create(user1);
// user2.gender = 'male';

// console.log(user2);

// for (const prop in user2) {
//   if (user2.hasOwnProperty(prop)) {
//     console.log(prop);
//   }
// }
