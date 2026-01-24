//hoisting: the behavior of moving declarations to the top of the current scope
//temporal dead zone: the time between entering scope and variable declaration where accessing the variable results in a ReferenceError

// console.log(x);
// console.log(y);
// console.log(z);

// var x = 10;
// let y = 20;
// const z = 30;

// var x;
// let y;

// console.log(x); // undefined
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// x = 10;
// y = 20;

// console.log(x);
// let z = 50;
// console.log(y);
// var x = 10;
// let y = 20;
// console.log(z);
// console.log(x);

//function hoisting example

// greet();

// function greet() {
//   console.log("Hello, World!");
// }
// meet();
// let meet = function () {
//   console.log("Nice to meet you!");
// };
