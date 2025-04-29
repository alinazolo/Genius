//процедурне програмування
// const summ = 2000;
// const month = 12;
// const p = 1000;

// const credit = (summ, date, p) => {
//    return (summ + p) * date;
// };

// console.log(credit(summ, month, p));


//OOP
// const credit = {
//    summ: 2000,
//    month: 12,
//    p: 1000,
//     result() {
//         return (this.summ + this.p)* this.month;
//     },
// };

// console.log(credit.result());

// class



// class Bank {
//     static type = 'Privat';
//     constructor(options) {
//         this.summ = options.summ;
//         this.month = options.month;
//         this.p = options.p;
//     }
//     credit() {
//         return console.log(this.summ + this.p * this.month);
//     }
// }

// const userBank = new Bank( {
// summ: 3000,
// month: 5,
// p: 500,
// });

// userBank.credit();

// class NewBank extends Bank {
//     constructor(options) {
//         super(options);
// this.card = options.card;
//     }
//     credit() {
//         super.credit();
//         return console.log("I am Aval");
//     }
// }

// const aval = new NewBank ({
//     summ: 3000,
//     month: 5,
//     p: 500,
//     card: true,
// })

// console.log(aval.credit());

//get&set

// class User {
//     constructor(props) {
//         this.name = props.name;

//     }
//     firstName ="";
//     lastName = "";
//     age = "";
//     city = "";

//     set name(newName) {
//         const nameRow = newName.split(" ");
//         this.firstName = nameRow[0];
//         this.lastName = nameRow[1];
// }

// get Name() {
//     return `First name: ${this.firstName} last name: ${this.lastName}`;
// }
// }

// const Kris = new User({
//     name: "Alina Zolo",
// });

// const Dasha = new User({
//     name: "Dasha Ilyanko",
// });

// console.log(Kris);

// const a = [1, 2, 3];
// console.log(a);

// const a = {
//     x:1,
//     y:2,
// };

// const b = Object.create(a);
// console.log(b);

// const Manager = function(name, sales) {
// this.name = name;
// this.sales = sales;
// this.sale = function() {
//     this.sales += 1;
// };
// };

// const ann = new Manager("Anna", 5);
// const ivan = new Manager ("Ivan", 10);

// console.log(ann.sales);
// console.log(ivan);

// Manager.prototype.sale = function () {
//     this.sales += 1;
// };

// console.log(ann.sales);
// ann.sale();
// console.log(ann.sales);

// class CoffeMachine {
//     _water = 0;
//     #waterLimit = 500;
//     constructor(power) {
//         this.power = power;
//     }

//     set waterAmount(value) {
//         if (value < 0){
//             value = 0;
//         }
//         this._water= value;
//     }
// }

// let cofeeMachine = new CoffeMachine(100);
// console.log(cofeeMachine);

// cofeeMachine.waterAmount = -200;
// console.log(cofeeMachine);

// Homework 6

// class Abonent {
// constructor(name, phone) {
//     this.name = name;
//     this.phone = phone;
// }
// setPhone (phone) {
// this.phone = phone;
// }
// get info() {
//     return `name: ${this.name}, phone: ${this.phone}`;
// }
// }

// const ivan = new Abonent ({
//     name: "Android",
// phone: "+38099999999",
// });

// console.log(ivan);
// ivan.setPhone("+38088888888");
// console.log(ivan);

// class Abonent {
//     constructor(name, number) {
//         this.name = name;
//         this.number = number;
//     }

//     setPhone(value) {
//         this.number = value;
//     }
// get info() {
//     return `name: ${this.name}, number: ${this.number}`;
// }
// }

// class PhoneBook {
//     constructor() {
//         this.abonents = [];
//     }

// addAbonent(abonent) {
//     this.abonents.push(abonent);
// }

// findAbonent(name) {
//     return this.abonents.find(abonent => abonent.name === name) || `Абонента з ім'ям ${name} не знайдено`;
// }

// showAllAbonents() {
//     this.abonents.forEach(abonent => console.log (abonent.info)); 
// }
// }

// const phoneBook = new PhoneBook();

// const ivan = new Abonent("Іван", "+380123456789");
// const anna = new Abonent("Anna", "+3806787890");
// const marina = new Abonent("Marina", "+38050890890");

// phoneBook.addAbonent(ivan);
// phoneBook.addAbonent(anna);
// phoneBook.addAbonent(marina);

// phoneBook.showAllAbonents();
// console.log(phoneBook.findAbonent("Anna").info);

// marina.setPhone("+38099999999");
// console.log(marina.info);

// Lesson 27

// class CircleBox {
//     constructor(selector) {
//         this.$el = document.querySelector(selector);
//     }

//     hide() {
//         this.$el.style.display = "none";

//     }
//     show() {
//         this.$el.style.display = "block";

//     }
// }

// class CircleItem extends CircleBox {
//     constructor(options) {
//         super(options.selector); // Ensure parent class initializes this.$el first

//         if (this.$el) {  // Ensure element exists before accessing style properties
//             this.$el.style.width = options.size + "px";
//             this.$el.style.height = options.size + "px";
//             this.$el.style.borderRadius = "50%";
//             this.$el.style.background = options.color;
//         } else {
//             console.error(`Element not found: ${options.selector}`);
//         }
//     }
// }

// const CircleRed = new CircleItem({
//     selector: "#circleRed",
//     color: "red",
//     size: 80,
// });

// const CircleGreen = new CircleItem({
//     selector: "#circleGreen",
//     color: "green",
//     size: 80,
// });

// const CircleYellow = new CircleItem({
//     selector: "#circleYellow",
//     color: "yellow",
//     size: 30,
// });

// function Car (name, color) {
//     this.name = name;
//     this.color = color;
// }

// Car.prototype.message = function() {
//     console.log(`${this.name} is ${this.color} color`);
// };

// Car.prototype.start = function() {
//     console.log(`${this.name} is start!!!`);
// };

// const BMW = new Car("bmw", "red");
// const Opel = new Car("opel", "green");

// BMW.message();
// Opel.message();
// BMW.start();

// let message = {
//     messageHello() {
//         console.log(`Hello, ${this.name}`);
//     },

//     messageBye() {
//         console.log(`Bye, ${this.name}`);
//     },
// };

// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// Object.assign(User.prototype, message);

// new User("Ivan").messageHello();

// Homework 7
// class Calculator {

//     constructor(number1, number2) {
// this.number1 = number1;
// this.number2 = number2;
//     }
 
//   read() {
// this.number1 = parseFloat(prompt('Write the first number'));
// this.number2 = parseFloat(prompt('Write the second number'));
//   }

//   summ() {
//     return this.number1 + this.number2;
//   }

//   mul() {
//     return this.number1 * this.number2;
//   }
//  }

//  const data = new Calculator(3, 3);
// console.log(data.summ());

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         return `Hello ${this.name}. You're ${this.age}`;
//     }

// }

// const ivan = new Person("Ivan", 34);
// console.log(ivan.greet());

// class Rectangle {
//     constructor(width, height) {
//                 this.width = width;
//                 this.height = height;
//             }
//     area() {
//         return this.width * this.height;
//     }

//     perimeter() {
//         return (this.width * 2) + (this.height * 2);
//     }

// }
// const rectangle = new Rectangle(5,6);
// console.log(rectangle.perimeter());

// class BankAccount {
//     constructor(owner, balance) {
//         this.owner = owner;
//         this.balance = balance;
//     }

//     deposit(amount) {
//         this.amount = amount;
//         return this.amount + this.balance;
//     }

//     withdraw(amount) {
//         this.amount = amount;
//         return this.amount - this.balance;
//     }

//     getBalance() {
//         return this.balance;
//     }
// }

// const bankAmount = new BankAccount ("Ivan", 6);
// console.log(bankAmount.getBalance());

// class Book {
//     constructor (title, author, pages) {
//         this.title = title,
//         this.author = author,
//         this.pages = pages
//     }

//     info () {
//         return `${this.title} by ${this.author}, ${this.pages} pages`;
//     }
// }

// class Library {
//     constructor() {
//         this.books = [];
//     }

//     addBook(book) {
//          this.books.push(book);
//     }

//     findBook(title) {
//         return this.books.find(book => book.title === title );
//     }
// }

// const myLibrary = new Library ();

// const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 218);
// const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 281);
// const book3 = new Book('1984', 'George Orwell', 328);

// myLibrary.addBook(book1);
// myLibrary.addBook(book2);
// myLibrary.addBook(book3);

// const searchTitle = '1984';
// const foundBook = myLibrary.findBook(searchTitle);

// if(foundBook) {
//     console.log(`Book found: ${foundBook.info()}`);
// } else {
//     console.log(`Book titled '${searchTitle}' not found`);
// }

// const container = document.querySelector('.container');
// const title = document.querySelector('.title');


// container.style.backgroundColor = 'lightblue';
// title.style.fontSize = '24px';
// const button = document.createElement('button');
// button.classList.add('button');
// button.textContent = 'Click';
// button.href="https://www.youtube.com/watch?v=WSUj3PRvzzg";
// button.style.backgroundColor = 'green';

// container.append(button);
// console.log(button);
// title.remove();

// const widgetElement = document.querySelector('[data-widget-name]');
// const widgetName = widgetElement.getAttribute('data-widget-name');
// console.log(widgetName);

// const frameworks = doc
// ument.querySelector(".frameworks");
// const newTechnocologies = ["Vue", "Angular", "Svelte"];
// const markup = newTechnocologies.map((technology) =>  `<li class ="framework-item">${technology}</li>`).join("");
// frameworks.insertAdjacentHTML("beforeend", markup);
// frameworks.insertAdjacentHTML("beforebegin", "<h2>Top Frontend Frameworks</h2>");
// const image = document.querySelector(".image");
// image.src = "https://images.pexels.com/photos/19852874/pexels-photo-19852874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

// const el = document.querySelector("#user");


// el.dataset.dateOfBirth = "1960-10-03";
// console.log(el.dataset.dateOfBirth);

// const heroEl = document.querySelector(".hero");
// const titleEL = document.createElement("h1");
// titleEL.classList.add("page-title");
// titleEL.textContent = "it's a title";

// heroEl.append(titleEL);

// const imageEl = document.createElement("img");
// imageEl.src = "https://images.pexels.com/photos/31214765/pexels-photo-31214765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
// imageEl.alt = "mountains";
// imageEl.width = 320;

// heroEl.append(imageEl);

// const colors = [
//    {label: 'red', color: '#F30F0F'},
//    {label: 'yellow', color: '#E6FF00'},
//    {label: 'black', color: '#202020'},
//    {label: 'blue', color: '#0900FF'},
// ];

// const createColorPickerMarkup = options => options.map((option) => {
//     const buttonEl = document.createElement("button");
//     buttonEl.classList.add("color-picker__option");
//     buttonEl.type = "button";
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
//     return buttonEl;
// });

// const colorPickerContainerEl = document.querySelector(".js-color-picker");
// const buttonElements = createColorPickerMarkup(options);

// colorPickerContainerEl.append( ...buttonElements);

// const container = document.querySelector(".js-container");
// const createColorPickerMarkup = options => options.map((option) => `<button class=color-picker__option type="button" style="background-color:${option.label}">${option.label}</button>`).join("");
// const buttonsMarkup = createColorPickerMarkup(colors);
// container.insertAdjacentHTML("beforeend", buttonsMarkup);

// TABLE

// const transactionHistory = [
//     {
//         id: "635783",
//         amount: "678",
//         date: "2025-03-25",
//         business: "Tech Solutions Inc.",
//         name: "John Doe",
//         type: "Invoice",
//         account: "Checking"
//     },
//     {
//         id: "635783",
//         amount: "678",
//         date: "2025-03-25",
//         business: "Tech Solutions Inc.",
//         name: "John Doe",
//         type: "Invoice",
//         account: "Checking"
//       },
//       {
//         id: "987654",
//         amount: "1200",
//         date: "2025-03-26",
//         business: "Global Marketing LLC",
//         name: "Jane Smith",
//         type: "Expense",
//         account: "Savings"
//       }

// ]

// const table = document.querySelector(".js-tbody");
// const createTableBodyMarkup = TransactionHistory => TransactionHistory.map((transaction) => {
//     const { id, amount, date, business, name, type, account } = transaction // const id =  transaction.id
//     return` 
//     <tr>
//         <td>${id}</td>
//         <td>${amount}</td>
//         <td>${date}</td>
//         <td>${business}</td>
//         <td>${type}</td>
//         <td>${name}</td>
//         <td>${account}</td>
//     </tr>`;
// }).join('');

// const tableMarkup = createTableBodyMarkup(transactionHistory);

// table.insertAdjacentHTML('beforeend', tableMarkup);

// const clickMe = document.querySelector(".js-click");
// const box = document.querySelector(".js-box");

// clickMe.addEventListener("click", handleClick);

// let step = 0;

// function handleClick() {
//     step += 50;

//     box.style.marginTop = `${step}px`;
//     box.style.marginLeft = `${step}px`;

//     console.log(step);

// }
// task1
// const cars = [
//     {
//         id:1,
//         car: "Audi",
//         type: "A6",
//         price: 3000,
//         img: "https://images.pexels.com/photos/9957864/pexels-photo-9957864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

//     },

//     {
//         id:2,
//         car: "BMW",
//         type: "X6",
//         price: 3000,
//         img: "https://www.shutterstock.com/image-photo/riga-latvia-5-september-2023-600nw-2357845059.jpg",
//     },

//     {
//         id:3,
//         car: "Honda",
//         type: "Civic",
//         price: 3000,
//         img: "https://cdn-xy.drivek.com/eyJidWNrZXQiOiJkYXRhay1jZG4teHkiLCJrZXkiOiJjb25maWd1cmF0b3ItaW1ncy9jYXJzL2ZyL29yaWdpbmFsL0hPTkRBL0NJVklDLVRZUEUtUi80MjA5MV9IQVRDSEJBQ0stNS1ET09SUy9ob25kYS1jaXZpYy10eXBlLXItZnJvbnQtdmlldy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMjQsImhlaWdodCI6bnVsbCwiZml0IjoiY292ZXIifX19",
//     },
// ]

// const refs = {
//     form: document.querySelector(".js-form"),
//     container: document.querySelector(".js-list"),
// };

// function createCarsMarkup(cars) {
//     return cars
//     .map(
//         (car) => `<li>
//         <img src="${car.img}" alt="${car.type}"></img>
//         <h2>${car.car}</h2>
//         <h3>${car.type}</h3>
//         <span>Price: ${car.price}$</span>
//     </li>`)
//     .join("");   
// }

// const carsMarkup = createCarsMarkup(cars);
// refs.container.insertAdjacentHTML("beforeend", carsMarkup);

// refs.form.addEventListener("submit", handleSearch);

// function handleSearch(event) {
// event.preventDefault();
// const {options, query} = event.currentTarget.elements;
// console.log(options.value, query.value);
// const result = cars.filter((car) => car[options.value].toLowerCase().includes(query.value.toLowerCase())
// );
// refs.container.innerHTML = createCarsMarkup(result);
// };

// const categories = document.querySelectorAll('#categories .item');
// console.log('Number of categories:', categories.length);

// categories.forEach(category => {
//     const title = category.querySelector('h2').textContent;
//     const itemsCount = category.querySelectorAll('ul li').length;
//     console.log("Category:", title);
//     console.log("Elements:", itemsCount);  
// });
// const images = [
//       {
//         url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//         alt: "White and Black Long Fur Cat",
//       },
//       {
//         url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//         alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//       },
//       {
//         url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//         alt: "Group of Horses Running",
//       },
//       {
//         url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
//         alt: "Alpine Spring Meadows",
//       },
//       {
//         url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
//         alt: "Nature Landscape",
//       },
//       {
//         url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
//         alt: "Lighthouse Coast Sea",
//       },
//     ];

//     const gallery = document.querySelector(".gallery");

//     function createImageMarkup(images) {
//         return images
//         .map(
//             (image) => `<li>
//             <img src="${image.url}" alt="${image.alt}"></img
//             </li>`
//         ).join("");   
//     }
// const imageMarkup = createImageMarkup(images);
// gallery.insertAdjacentHTML("beforeend", imageMarkup);
    // const carsMarkup = createCarsMarkup(cars);
// refs.container.insertAdjacentHTML("beforeend", carsMarkup);

    // function createCarsMarkup(cars) {
//     return cars
//     .map(
//         (car) => `<li>
//         <img src="${car.img}" alt="${car.type}"></img>
//         <h2>${car.car}</h2>
//         <h3>${car.type}</h3>
//         <span>Price: ${car.price}$</span>
//     </li>`)
//     .join("");   
// }

// Task 2
// const addBtn = document.querySelector("#add");
// const removeBtn = document.querySelector("#remove");
// const clickBtn = document.querySelector("#click");

// const handleClick = () => {
//     console.log("Hello");
// };

// addBtn.addEventListener("click", () => {
//     clickBtn.addEventListener("click", handleClick)
// } );

// removeBtn.addEventListener("click", () => {
//     clickBtn.removeEventListener("click", handleClick)
// });
// Task 3
// const form = document.querySelector(".form");
// const loginInput = form.querySelector('input[type="text"]');
// const passwordInput = form.querySelector('input[type="password"]');

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const login = loginInput.value;
//     const password = passwordInput.value;
//     console.log(`Логін ${login}, pasword ${password}`);
//     form.reset();
// } 

//Task 4

// const ball = document.querySelector(".ball");

// ball.onmousedown = function (event) {
//     function move(pageX, pageY) {
//         ball.style.left = pageX - ball.offsetWidth / 2 + "px";
//         ball.style.top = pageY - ball.offsetHeight / 2 + "px";
//     }

//     move(event.pageX, event.pageY);

//     function onMouseMove(event) {
//         move(event.pageX, event.pageY);
//     }

//     document.addEventListener("mousemove", onMouseMove);

//     ball.onmouseup = function () {
//         document.removeEventListener("mousemove", onMouseMove); // Fixed typo here
//         ball.onmouseup = null; // optional cleanup
//     };
// }

//Task 5

// const input = document.querySelector(".input");
// const title = document.querySelector(".title");

// input.addEventListener ("input", updateTitle);

// function updateTitle(event) {
//     event.preventDefault();
//     const trimmedValue = input.value.trim();
//     title.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue
// };

const form = document.querySelector(".login-form");
const emailInput = form.querySelector('input[type="email"]');
const passwordInput = form.querySelector('input[type="password"]');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
}