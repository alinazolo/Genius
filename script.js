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
let arr = [39, 67, 56, 42, 5];
// let red = arr.reduce((summ, item) => summ + item);
// console.log(red);

let sum = arr.reduce((summ, item) => summ + item) / arr.length;
console.log(sum);