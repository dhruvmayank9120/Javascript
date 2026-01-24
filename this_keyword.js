//this: this keyword refers to the current object context
//globalthis: globalthis means the global object in any environment
//global object: globa object means the window object in browsers and the global object in Node.js

//chrome browser: window
//Nodejs: global
//In Node js: Module's exports object
// console.log("hello world");
// console.log(Math.random());
// setInterval()
//new Object()
// new String()

// console.log(globalThis.Math.random());//will point to global object in any environment

//window and this points to global object in browser
// console.log(this===window);//true

// "use strict"; //strict mode
//strict mode means javascript rules are more strict
// function greet() {
//   console.log(this); //in this case this will point to global object
// }
// greet();

// let obj = {
//   name: 10,
// };
// Object.freeze(obj); //to make object immutable
// obj.name = 20;
// console.log(obj);

// const obj = {
//   name: "Alice",
//   greet: function () {
//     console.log(this.name);
//   },
// };
// obj.greet(); // Alice

//Arrow function do not have their own this
//Instead, they inherit this from the surrounding lexical context

// let obj = {
//   name: "Bob",
//   age: 11,
//   greet: function () {
//     let ab = () => {
//       console.log(this.name);
//     };

//     ab();
//   },
// };
// obj.greet(); // Bob

//Inside a constructor or class, this refers to the newly created instance
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// let a = new Person("Charlie", 25);
// console.log(a.name); // Charlie
// console.log(a.age); // 25

// let greet = () => {
//   console.log(this);
// };

// greet(); // In a module or strict mode, this will be undefined, in non-strict mode it will point to global object
