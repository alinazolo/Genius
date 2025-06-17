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
// Task 5
// const form = document.querySelector(".login-form");
// const emailInput = form.querySelector('input[type="email"]');
// const passwordInput = form.querySelector('input[type="password"]');

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
    
// }

// localStorage.setItem("name", "Kristina");
// const a = localStorage.getItem("name");
// console.log(a);

// function check() {
//     let val = document.getElementByName("radio");
//     if (val[0].checked) {
//         console.log("Woman");
//     } else {
//         console.log("Man");
//     }
// }

// <!-- Task 6 -->
// const form = document.querySelector(".form");
// const nameInput = document.querySelector(".inputName");
// const inputLastName = document.querySelector(".inputLastName");
// const age = document.querySelector("#age");
// const male = document.getElementsByName("radio");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const info = {
//         name: nameInput.value, 
//         lastName:  inputLastName.value,
//         age: age.value,
//         male: male[0].checked,
//     };
//     console.log(info);
//     localStorage.setItem("info", JSON.stringify(info));
// }
// if (localStorage.getItem("info")) {
//     const ls = localStorage.getItem("info");
//     console.log(ls);
//     nameInput.value = ls.name;
//     inputLastName.value = ls.lastName;
// }

// <!-- Task 7 -->

// let form = document.querySelector('#form');
// let formData = {};
// form.addEventListener("input", function(event) {
//     formData[event.target.name] = event.target.value;
//     localStorage.setItem("info", JSON.stringify(formData))
// });

// if (localStorage.getItem("formData")) {
//     formData = JSON.parse(localStorage.getItem("formData"));
//     for (let key in formData) {
//         form.elements[key].value = formData[key];
//     }
// }

// Task 4

// let form = document.querySelector(".login-form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     const {
//         email,
//         password
//     } = form.elements

//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();

//     if(emailValue === '' || passwordValue === '' ) {
//         alert('All form fields must be filled in');
//         return;
//     }

//     const fromData = {
//         email: emailValue,
//         password: passwordValue
//     };
//     console.log(formData); // виводимо об'єкт у консоль
//     form.reset(); // очищаємо форму
// });

// Task 5
// const color = document.querySelector(".color");
// const button = document.querySelector(".change-color");
// const widget = document.querySelector(".widget");

// button.addEventListener("click", changeColor); 

// function changeColor(event) {
//     const newColor = getRandomHexColor();
//     color.textContent = newColor;
//     document.body.style.backgroundColor = newColor;
// };

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, 0)}`;
//   }
  
// Unit 8 part 1
// const products = [
//     {
//         id: 1,
//         img: "https://istyle.rs/pub/media/catalog/product/cache/image/400x400/beff4985b56e3afdbeabfc89641a4582/i/p/iphone_15_pro_natural_titanium_pdp_image_position-1__en-us_1_1.jpg",
//         name: "iPhone 15",
//         price: 2000,
//         description: "iPhone 15 Pro Max 256GB Natural Titanium"
//     },
//     {
//         id: 2,
//         img: "https://istyle.rs/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/i/p/iphone_15_pro_max_blue_titanium_pdp_image_position-1__en-us_1.jpg",
//         name: "Samsung Galaxy S24",
//         price: 1800,
//         description: "Samsung Galaxy S24 Ultra 512GB Phantom Black"
//     },
//     {
//         id: 3,
//         img: "https://shop.switch.com.my/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__GBEN_7cf60425-0d5a-4bc9-bfd9-645b9c86e68e.jpg?v=1717694179&width=823",
//         name: "Google Pixel 8 Pro",
//         price: 1600,
//         description: "Google Pixel 8 Pro 256GB Obsidian"
//     }
// ];

// function createProductsMarkup(products) {
//     return products.map(
//         ({id, 
//             img, 
//             price}) => `<li data-id="${id}" class="item product-item">
//             <img src="${img}" alt="${name}" width="300")/>
//             <h2>${name}</h2>
//             <p>Price: ${price}$</p>
//             </li>`
//         )
//         .join("")
// }

// const container = document.querySelector(".products");
// container.insertAdjacentHTML("beforeend", createProductsMarkup(products));
// container.addEventListener("click", handleCardClick);

// function handleCardClick(event) {
//     if(event.currentTarget === event.target) {
//         return;
//     }
//     console.log(event.target);

//     const currentProduct = event.target.closest(".product-item");
//     const productId = Number(currentProduct.dataset.id);
//     const productObj = products.find(({id}) => id === productId);
//     console.log(productObj);

//     const instance = basicLightbox.create(`
//         <div class="modal">
//         <img src="${productObj.img}" alt="${productObj.name}"/>
//         <h2>${productObj.name}</h2>
//             <p>Price: ${productObj.price}$</p>
//                <p>Description: ${productObj.description}$</p>
//         </div>
//     `);
//     instance.show();
// }

// глибока деструкирізація 
// const user = {
//     username: "Jacob",
//     skills: {
//         html: true,
//         css: false,
//         js: true,
//     },
// };
// const {
//     skills: { html, css, js },
// } = user;

// console.log(html); 
// console.log(css); 

// іменована деструкирізація
//  const stack = {
//    js: true,
//    html: true,
//    nodejs: false
// };
//const jsCore = stack.js
// const { js: jsCore, html: html5,  nodejs} = stack;
// console.log(jsCore); 

// деструкирізація значення за замовчуванням 
// const teacher = {
//     firstName: "Robert",
//     lastName: "Black",
// };

// const { firstName, lastName, age = 30 } = teacher;

// console.log(age); 


// const user = {
//     username: "Jacob",
//     skills: {
//         html: true,
//         css: false,
//         js: true,
//     },
// };

// function getUserName({username: name, skills: { html, css, js}} = {}){
//     console.log(
//         `Hello my name is ${name}, I know html - ${html}, css - ${css} and js - ${js}`
//     );
// }
//  getUserName(user);
//Task 
//  function calculateHousePerimetr({a, b, c, d }) {
//     const perimeter = a + b + c + d;
//     return perimeter;
//  }

//  const houseSides = {
//     a: 10,
//     b: 15,
//     c: 10,
//     d: 15,
//  };

//  const perimeter = calculateHousePerimetr(houseSides);
//  console.log(perimeter);

// //Task 

// function calculatePerimeter({width, length}) {
//     return width * 2 + length * 2;
// }
//  console.log(calculatePerimeter({width: 5, length: 2}));

// Unit 8 homework part 1
const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


function createGalleryMarkup(images) {
    return images.map(
        ({preview, original, description}) => `<li class="gallery-item"
          <a class="gallery-link" href="${original}">

        <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
        />
  </a>
</li>`
    ).join("")
}

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", createGalleryMarkup(images));
gallery.addEventListener("click", galleryClick); 

function galleryClick(event) {
    event.preventDefault();
     if(event.target.nodeName !== 'IMG') {
 return;
}
console.log(event.target);

const originalImage = event.target.getAttribute('data-source');
console.log(originalImage);

const instance = basicLightbox.create(`
<img src="${originalImage}" width="1100" height="640">
`)
instance.show()

}


const container = document.querySelector(".products");
// container.insertAdjacentHTML("beforeend", createProductsMarkup(products));
// container.addEventListener("click", handleCardClick);

// function handleCardClick(event) {
//     if(event.currentTarget === event.target) {
//         return;
//     }
//     console.log(event.target);

//     const currentProduct = event.target.closest(".product-item");
//     const productId = Number(currentProduct.dataset.id);
//     const productObj = products.find(({id}) => id === productId);
//     console.log(productObj);

//     const instance = basicLightbox.create(`
//         <div class="modal">
//         <img src="${productObj.img}" alt="${productObj.name}"/>
//         <h2>${productObj.name}</h2>
//             <p>Price: ${productObj.price}$</p>
//                <p>Description: ${productObj.description}$</p>
//         </div>
//     `);
//     instance.show();
// }
