//functions: functions are reusable piece of code.

// function greet() {
//   console.log("hello coder army");
// }

// greet();

//add program

//parameters
// function sum(number1, number2) {
//   console.log(number1 + number2);
// }

//function call: argument
// sum(2, 3);

//multiplication

// function multiply(number1, number2) {
// console.log(number1 * number2);
//   return number1 * number2;
// }
// let result = multiply(4, 5);
// console.log(result);

//can be stored under a value.
//return is the ending line of the function.
// const fun = function () {
//   console.log("hello coder army");
//   console.log("I am fine");
//   return "money";
// };

// console.log(fun());
// console.log(fun);
// fun();

//Arrow function

// const fun = () => {
//   console.log("hello coder army");
// };

// fun();

// const add = (number1, number2) => number1 + number2;

// console.log(add(5, 6));

//advantages of arrow function: makes the code clean and return is not mandatory to put here, braces are also not mandatory.

// const cube = (number) => number * number * number;

// console.log(cube(8));

//rest operator(...): used when no fixed number of parameters are there.
// const sum = function (...number) {
//sum by for loop
//   console.log(number);
// };
// sum(3, 4, 5);
// sum(4, 6, 1, 19, 98);
// sum(6, 1, 98);

//-->Object decosntructing
// let obj = {
//   name: "Rohit",
//   age: 30,
//   amount: 4320,
// };

// function fun({ name, amount }) {
//   console.log(name, amount);
// }

// fun(obj);

// function love(obj1) {
//   console.log(obj1);
// }

// love(obj);

let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  c: 1,
  d: 2,
};
// obj2.__proto__ = obj1;

obj2 = Object.create(obj1);

console.log(obj2.__proto__);
console.log(obj2);
