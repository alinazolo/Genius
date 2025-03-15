// const min = prompt("Введіть хвилину");

// if (min >= 0 && min <= 14) {
//     console.log("Перша чверть");
// } else if (min >= 15 && min <= 29) {
//     console.log("Друга чверть");
// } else if (min >= 30 && min <= 44) {  // Виправлена умова (правильний діапазон)
//     console.log("Третя чверть");
// } else if (min >= 45 && min <= 59) {  // Додано перевірку для четвертої чверті
//     console.log("Четверта чверть");
// } else {
//     console.log("Некоректне значення. Введіть число від 0 до 59.");
// }


// const value = prompt("Write the name of fruit").toLowerCase();
// let cost;

// switch (value) {
// case "apple":
//     cost = 10;
//     alert(`${value} costs ${cost} USD`);
//     break;

//     case "orange":
//     cost = 30;
//     alert(`${value} costs ${cost} USD`);
//     break;

//     case "pineaple":
//     cost = 20;
//     alert(`${value} costs ${cost} USD`);
//     break;

//     case "grape":
//     cost = 60;
//     alert(`${value} costs ${cost} USD`);
//     break;

//     default:
//         alert(`${value} not available`);
//         break;
// }33

// function sumDigits(number) {
//     if (number < 100 || number > 999) {
//         return "Будь ласка, введіть тризначне число!";
//     }
// }

// let numStr = String(prompt("Введіть тризначне число:"));
// let digit1 = Number(numStr[0]);
// let digit2 = Number(numStr[1]);
// let digit3 = Number(numStr[2]);
// let sum;

// switch(numStr) {
//     default:
//         sum = digit1 + digit2 + digit3;
//         break;
// }

// console.log(sum);
// let a = 0;
// do {
//     console.log(a);
//     a++
// } while (a < 5) 

// for (let a = 0; a < 3; a++) {
//     console.log(a);
// }

// let sum = 0;
// while (true) {
//     let value = +prompt("Введіть число")
//     if(!value) break
//     sum += value
// }
// console.log(sum)

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) continue;
//     console.log(i);
// }


// arr[2] = "Lemon";
// arr[3] = "Cherry";
//  arr.push("Tomato");
//  console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift("Tomato");
// console.log(arr);

// let arr = ["Apple", "Orange", "Plum"];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let item of arr) {
//     console.log(item);
// }

// for (let key in arr) {
//     console.log(arr[key]);
// }

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// console.log(matrix[1][1]);

// Складні типи копіюються по посиланню, а прості за значенням
// let arr = [1,2,3];
// let arr2 = arr;
// arr.push(4);
// console.log(arr);
// console.log(arr2);

// let arr = ["a", "b", "c", "d", "e", "ж"];
// arr.splice(2,3);
// console.log(arr);

// console.log(arr.slice(1, 5));
// let a = [1, 2, 3];
// console.log(arr.concat(a, "test"));

// console.log(arr.indexOf("c", 1));
// console.log(arr.includes("c"));

// const fruit = [
//     { id: 1, name: "Apple"},
//     { id: 2, name: "Banana"},
//     { id: 3, name: "Pineapple"},
//     { id: 4, name: "Grape"},
// ];

// console.log(fruit.find((item) => item.id === 1));
// console.log(fruit.filter((item) => item.id < 3));

// let result = fruit.map((item) => item.name.length);
// console.log(result);

// let names = "Olga, Yulia, Masha";
// let arr = names.split(", ");
// console.log(arr);

// let newString = arr.join(", ");
// console.log(newString);
;
// let arr = [39, 67, 56, 42, 5];
// let red = arr.reduce((summ, item) => summ + item);
// console.log(red);

// let sum = arr.reduce((summ, item) => summ + item) / arr.length;
// console.log(sum);

//  function sum(a, b) {
//    return a + b; 
//  }
// let result = sum(7, 8);
// console.log(result);

// const addName = function() {
//    const arg = Array.from(arguments); // Перетворюємо arguments у масив
//    console.log(arguments); // ✅ Правильно, arguments існує у звичайній функції
//    console.log(arg); // ✅ Масив аргументів
// };
// addName(1, 3, 5);

// const addName = function(...arg) {
//    console.log(arg);
// };
// addName(1, 3, 5); 

// callback

// function ask(question, yes, no) {
//    if (confirm(question)) {
//       yes();
//    } else {
//       no();
//    }
// }

// function showOk() {
//    console.log("You say ok")
// }
// function showCancel() {
//    console.log("You say No")
// }

// ask("Yes or no?", showOk, showCancel);

// hof
// const hello = function(name) {
//    console.log(`Hello, ${name}`);
// };

// hello("Anna");

// const hello = function(name) {
//    console.log(`Hello, ${name}`);
// };

// const searchName = function(callback) {
//    const name = "Ivan";
//    callback(name);
// };

// searchName(hello);

// function showMovie(age) {
//    if (age>21) {
//       return;
//    }
//    return console.log("Go to movie!");
// }

// showMovie(21);

// const test = (arg) => {
//    console.log(arg);
// }

// test("Hello");

// const showMovie = (age) => {
//    if (age > 21) {
//       return console.log("Hello");

//    }
//    return console.log("Bye");
// };

// showMovie(12);

// function checkAge(age) {
//    return age > 18 ? true : confirm('Батьки дозволили?')
// };


// function min(a,b) {
//    if(a<b) {
//       return a; 
//    }
//    else { 
//       (a>b) 
//          return b;
//       }
// }
// function min(a,b) {
//    return a < b ? a:b;
// };
// 📌 Завдання: Напиши функцію isEven(n), яка повертає 'Парне', 
// якщо число парне, і 'Непарне', якщо непарне.

// function isEven(n) {
//    return n % 2 === 0 ? 'Парне' : 'Непарне';
// }
// 📌 Завдання: Напиши функцію checkAge(age), яка повертає 'Доступ дозволено', 
// якщо age більше або дорівнює 18, і 'Доступ заборонено', якщо менше.

// function checkAge(age) {
//    return age >= 18 ? 'Доступ дозволено' : 'Доступ заборонено';
// }

// 📌 Завдання: Напиши функцію checkSign(num), яка повертає:

// 'Додатне', якщо число більше 0.
// 'Від’ємне', якщо число менше 0.
// 'Нуль', якщо число дорівнює 0.

// function checkSign(num) {
//    return num > 0 ? 'Додатне': num < 0 ? 'Від’ємне': 'Нуль';
// }
// 📌 Завдання: Напиши функцію gradeMark(mark), 
// яка переводить числову оцінку у текстове значення:

// 90+ – 'Відмінно'
// 75-89 – 'Добре'
// 60-74 – 'Задовільно'
// <60 – 'Незадовільно'

// function gradeMark(mark) {
//   return 90 <= mark ? 'Відмінно': 75 <= mark ? 'Добре':'Задовільно';
// }

// console.log(gradeMark(75));
// const greet = name => `Hello ${name}`;
// console.log(greet("Анна"));

// замикання
// function createNewNumber(n) {
//    return function (num) {
//       return n + num;
//    };
// }

// const addFive = createNewNumber(5);
// console.log(addFive(10)); // 15

// function createUrl(domain) {
//    return function (url) {
//       return `https://${url}.${domain}`;
//    };
// }

// const comUrl =  createUrl("com");
// console.log(comUrl("google"));

// function createUsernamePrefix(prefix) {
//    return function(name) {
//       return `${prefix}+${name}`;
//    };
// }

// const adminUserName = createUsernamePrefix("d");
// console.log(adminUserName("john")); // "d+john"

// CALL
// const userInfo = {
//    name: 'name',
//    age: 98,
//    logInfo: function(job) {
//       console.group(`${name} info:`);
//       console.log(`Name is: ${this.name}`);
//       console.log(`Age is: ${this.age}`);
//       console.log(`Job is: ${job}`);
//       console.groupEnd();
//    },
// };

// const Vano = {
//    name: 'Ivan',
//    age:45,
// };

// userInfo.logInfo.call(Vano, 'developer');

// const showUserInfo = {
// name:name,
// age: 87,
// logInfo: function(job, city) {
//    console.group(`${name} info:`);
//       console.log(`Name is: ${this.name}`);
//       console.log(`Age is: ${this.age}`);
//       console.log(`Job is: ${job}`);
//       console.log(`City is: ${city}`);
//       console.groupEnd();
// },
// };

// const Vano = {
//    name: 'Ivan',
//    age:45,
// };

// showUserInfo.logInfo.apply(Vano, ["developeer", "Lviv"]);

// const message = function(name, stars) {
//    console.log(`${name}, WElcome to ${this.hotel}, stars ${stars}`);
// };

// const Bukovel =  {hotel: "Bukovel"};
// const Turist = { hotel: "Turist"};

// message.call(Bukovel, "Ivan", "5");
// message.call(Turist, "Ivan", "3");

// message.apply(Bukovel, ["Ivan", "5"]);
// message.apply(Turist, ["Ivan", "3"]);

// message.bind(Bukovel, "Ivan", "5")();
// message.bind(Turist, "Ivan", "3")();


// const cart = {
//    showItems() {
//       console.log("In cart:", this.items);
//    },
// };

// const woman = {
//    items: ["dress, shoes"],
// };

// const men = {
//    items: ["Suit, T-shirt"],
// };

// const child = {
//    items: ["Suit, T-shirt"],
// };


// document.querySelector('#wom').addEventListener('click', cart.showItems.bind(woman));
// document.querySelector('#man').addEventListener('click', cart.showItems.bind(men));
// document.querySelector('#children').addEventListener('click', cart.showItems.bind(child));

// const infoCar = {
//    name: "BMW",
//    model: 'M7',
//    color: "white",
//    showInfo: function() {
//       console.log( "Car "+ this.name + " model " + this.model + " color " + this.color);
//    },
// };

// car2 = {
//    name: "Opel",
//    model: "XXX",
//    color: "red",
// };

// infoCar.showInfo.bind(car2)();
// infoCar.showInfo.call(car2);
// infoCar.showInfo.apply(car2);

// HOMEWORK LESSON 5


// 1
// const infoStudent = {
//    name: 'Ivan',
//    specialize: 'Marketing',
//    averageMark: 5,
//    missedLessons: 3,
//    showInfo: function() {
//       console.log(' name: ' + this.name + ' specialize: ' + this.specialize + ' average mark: ' 
//          + this.averageMark + ' missed lessons: ');
//    },
// };

// student2 = {
//    name: 'Liza',
//    specialize: 'Medicine',
//    averageMark: 2,
//    missedLessons: 1,
// };

// student3 = {
//    name: 'Vasil', 
//    specialize: 'Psychology',
//    averageMark: 4,
//    missedLessons: 8,

// }

// infoStudent.showInfo.bind(student2)();
// infoStudent.showInfo.call(student2);
// infoStudent.showInfo.apply(student2);

// infoStudent.showInfo.bind(student3)();
// infoStudent.showInfo.call(student3);
// infoStudent.showInfo.apply(student3);


// const definition = {
//    showDefinition () {
//       console.log(this.name, this.definition);
//    },
// };

// const html = {
//    name: 'HTML',
//    definition: 'is the most basic building block of the Web. It defines the meaning and structure of web content.',
// };

// const css = {
//    name: 'CSS',
//    definition: 'allows you to create great-looking web pages',
// };

// document.querySelector('#html').addEventListener('click', definition.showDefinition.bind(html));
// document.querySelector('#css').addEventListener('click', definition.showDefinition.bind(css));

const infoFruit = {
product: 'banana',
price: 30,
quantity: 4.5,
total: function() {
console.log(this.product+ " costs: " + this.price * this.quantity);
},
};

const fruit2 = {
    product: 'cherry',
price: 58,
quantity: 1.3,
};

const fruit3 = {
    product: 'orange',
price: 89,
quantity: 3.4,
};

infoFruit.total.call(fruit2);
infoFruit.total.apply(fruit2);
infoFruit.total.bind(fruit2)();

infoFruit.total.bind(fruit3)();
infoFruit.total.call(fruit3);
infoFruit.total.apply(fruit3);