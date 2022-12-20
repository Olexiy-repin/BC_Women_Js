/*
 * Класи: оголошення, конструктор, методи
 * Приватні властивості та методи
 * Геттери та сеттери
 * Статичні властивості та методи
 */

class User {
  #login;

  static test = 5;

  constructor(userInfo) {
    // let this = {};
    const { firstName, lastName, age, phoneNumber, login, password } = userInfo;

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.#login = login;
    this.password = password;
    // return this;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user = new User({
  firstName: 'Edward',
  lastName: 'Smith',
  age: 30,
  phoneNumber: '(096) 58-05-459',
  login: 'id@si.pg',
  password: '123456',
});

console.log(user.login);
user.login = 'test@gmail.com';
console.log('user: ', user);
