/*
? Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
? email - email
? age - вік, число
? numberOfPosts - кількість постів, число
? topics - масив тем, на яких спеціалізується блогер
? Клас очікує один параметр – об'єкт налаштувань з однойменними властивостями.
? Додай метод getInfo(), який, повертає рядок: Blogger ${email} is ${вік} years old and has ${кількість постів} posts.
? Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
*/

// class Blogger {
//   constructor(bloggerInfo) {
//     // let this = {};
//     const { email, age, numberOfPosts, topics } = bloggerInfo;

//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//     // return this;
//   }

//   getInfo() {
//     return `Blogger ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new Blogger({
//   email: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });

// console.log(mango);
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//   email: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });

// console.log(poly);
// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 21 posts

/*
? Напиши клас Storage, який створює об'єкти для управління складом товарів.
? При виклику ми отримуємо один аргумент - початковий масив товарів, і записуватиме його у властивість items.

? Додай методи класу:

? getItems() – повертає масив товарів.
? addItem(item) - отримує новий товар та додає його до поточних.
? removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
*/

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     const idxOfItem = this.items.indexOf(item);

//     this.items.splice(idxOfItem, 1);
//   }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// console.log(storage);

// console.log(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.log(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.log(storage.getItems()); // [ '🍎', '🍇', '🍑', '🍌' ]
/*
? Напиши клас User який створює об'єкт із властивостями login та email.
? Оголоси приватні властивості #login та #email, доступ до яких зроби через геттер та сеттер login та email.
*/

class User {
  #login;
  #email;

  constructor({ login, email }) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({
  login: 'Mango',
  email: 'mango@dog.woof',
});

console.log(mango.login); // Mango
mango.login = 'Mangodoge';
console.log(mango.login); // Mangodoge

console.log(mango.email);
mango.email = 'hacag@ce.ie';
console.log(mango.email);

const poly = new User({
  login: 'Poly',
  email: 'poly@mail.com',
});

console.log(poly.login); // Poly
poly.login = 'Polycutie';
console.log(poly.login); // Polycutie
/*
? Напиши клас Notes, який управляє колекцією нотаток у властивості items.
? Нотатка це об'єкт із властивостями text та priority.
? Додай класу статичну властивість Priority, в якій зберігатиметься об'єкт із пріоритетами.
?
? {
? LOW: 'low',
? NORMAL: 'normal',
? HIGH: 'high'
? }
?
? Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).
*/

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша нотатка', priority: Notes.Priority.LOW });
// console.log(myNotes);

// myNotes.addNote({
//   text: 'Моя друга нотатка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes);

// myNotes.removeNote('Моя перша нотатка');
// console.log(myNotes);

// myNotes.updatePriority('Моя друга нотатка', Notes.Priority.HIGH);
// console.log(myNotes);

/*
? Напишіть клас Toggle, який приймає об'єкт налаштувань {isOpen: boolean}
? та оголошує одну властивість on - стан вкл/викл (true/false).
? За замовчуванням значення властивості on має бути false.
*/

// const firstToggle = new Toggle({ isOpen: true });

// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();

// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
