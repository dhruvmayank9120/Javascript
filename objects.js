//object: used to store multiple values in a single variable.
//keys can't be repeated, can't have spaces, special characters except _ , can't start with number
//can be written like "my hobby": "reading books" etc if want spaces between words but then have to access using bracket notation only
//if key is number, it will be converted to string internally by JS and have to access using bracket notation only.
//undefined and null can also be used as keys but not recommended.

//--->how to create an object, key: "value"

// const obj = {
//   0: 0,
//   1: 10,
//   2: 20,
//   name: "John",
//   account_balance: 5000,
//   age: 30,
//   city: "New York",
//   gender: "Male",
//   "account number": 1234567890,
//   undefined: 67,
//   null: "mohan",
// };

// const inst = {
//   insta_id: "john_doe",
//   password: "password123",
// };

// console.log(obj);
// console.log(inst);

//accessing object properties
// console.log(obj.name);
// console.log(obj.account_balance);
// console.log(obj.age);
// console.log(obj.city);
// console.log(obj.gender);

//-->another way to access object properties
// console.log(obj["account_balance"]);
// console.log(obj["account number"]);
// console.log(obj[1]);
// console.log(obj["undefined"]);
// console.log(obj["null"]);
// console.log(inst["insta_id"]);

//--->another way to create object

// const person = new Object();

//property assignment
// person.firstName = "Alice";
// person.lastName = "Smith";
// person.age = 25;
// person.country = "USA";

// console.log(person);

//delete property from object
//syntax: delete object.property
// delete person.age;
// console.log(person);

//Modify or update property
//syntax: object.property = new value
// person.country = "Canada";
// person.age = 26; //re-adding age property
// console.log(person);

//--->third way to create object
//using constructor function
//this is easy because we can create multiple objects using the same constructor function

// class People {
//   constructor(na, ag, gen) {
//     this.name = na;
//     this.age = ag;
//     this.gender = gen;
//   }
// }

// let per1 = new People("Rohit", 20, "Male");
// let per2 = new People("Anita", 22, "Female");

// console.log(per1, per2);

//--->commom methods to all objects

// let obj = {
//   name: "Rohit",
//   age: 20,
//   account_balance: 5000,
//   gender: "Male",
// };

// console.log(Object.keys(obj)); //returns an array of keys
// console.log(Object.values(obj)); //returns an array of values
// console.log(Object.entries(obj)); //returns an array of [key, value] pairs

//assign use case: merging two objects
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const obj4 = { e: 5, f: 6 };

//syntax: Object.assign(target, source1, source2, ...)
// const obj3 = Object.assign({}, obj1, obj2);
// obj3.a = 10; //modifying merged object to show original objects remain unchanged
// console.log(obj3);

// console.log(obj1, obj2); //original object remains unchanged

//spread operator use case: merging two objects
// const obj5 = { ...obj1, ...obj2, ...obj4 };
// console.log(obj5);

//--->Shallow copy vs Deep copy
//shallow copy: copies the reference of the object, both objects point to the same memory location
//deep copy: creates a new object with the same properties, both objects point to different memory locations

// let obj1 = {
//   a: 1,
//   b: 2,
// };

// let obj2 = obj1; //shallow copy, both obj1 and obj2 point to the same memory location
// console.log(obj2);

// obj2.a = 10; //modifying obj2 also modifies obj1
// console.log(obj2, obj1); //obj2 is also changed

//--->deep copy

// let obj3 = structuredClone(obj1); //deep copy, obj3 points to a different memory location
// obj3.a=20; //modifying obj3 does not modify obj1
// console.log(obj3, obj1); //obj1 remains unchanged

//--->nested objects

// const user = {
//   name: "Rohit",
//   balace: 5000,
//   address: {
//     pincode: 1245,
//     street: "123 Main St",
//   },
// };

//accessing nested object properties
// console.log(user.address.pincode);
// console.log(user.address.street);

//accessing nested object properties using bracket notation
// console.log(user["address"]["pincode"]);
// console.log(user["address"]["street"]);
//copying objects

// const user2 = Object.assign({}, user); //shallow copy
// console.log(user2);
// user2.address.pincode = 9999; //modifying nested object property in user2 also modifies user
// console.log(user.address.pincode); //user's address.pincode is also changed

//---structuredClone for deep copy
// const user3 = structuredClone(user); //deep copy
// user3.address.pincode = 8888; //modifying nested object property in user3 does not modify user
// console.log(user.address.pincode); //user's address.pincode remains unchanged

//---Destructuring objects
//destructuring allows to extract multiple properties from an object and assign them to variables

// let obj = {
//   name: "Rohit",
//   money: 430,
//   balance: 5000,
//   age: 20,
//   aadhar: 123456789012,
// };

// const { name, balance } = obj; //destructuring assignment
// console.log(name, balance); //Rohit

// const { name: full_name, balance: amount, age: umar } = obj; //destructuring with renaming
// console.log(full_name, amount, umar); //Rohit 5000 20

//-->rest operator in destructuring
//rest operator collects the remaining properties into a new object
// const { name, age, ...obj1 } = obj; //rest operator to collect remaining properties
// console.log(obj1);

// const arr = [3, 2, 1, 5, 10];
// const [first, second] = arr; //means only first two elements will be extracted
// const [first, second, , third] = arr; //space means skip that element
// const [first, second, ...rest] = arr; //rest operator to collect remaining elements
// console.log(first, second, third);

//-->destructuring nested objects
// let obj = {
//   name: "Rohit",

//   age: 20,
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     pincode: 1245,
//   },
// };

// const {
//   address: { pincode, city },
// } = obj;
// console.log(pincode, city);

//-> I can write functions inside objects as well

// let user = {
//   name: "Rohit",
//   amount: 5000,
//   greet: function () {
//     return console.log("Hello coder army");
//   },
//   meet: function () {
//     return 20;
//   },
// };

// user.greet();
// console.log(user.meet());

//Note:---> inside object we can put arrays, functions, other objects as values as well.

//--->Prototype: prorotype is a mechanism by which objects in JavaScript can inherit properties and methods from other objects.
//every object has a prototype, which is another object from which it inherits properties and methods.
//When we try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks for it on the object's prototype, and so on, up the prototype chain until it finds the property or method or reaches the end of the chain.

//easy explanation:
// Think of prototype as a shared toolbox 🧰.

// Every JavaScript object has access to a hidden toolbox.

// If an object doesn’t have something (like a method), JavaScript looks into its prototype toolbox.

// If it’s still not found, JavaScript keeps checking higher toolboxes → this is called the prototype chain.

let user1 = {
  name: "Rohit",
  age: 20,
};

let user2 = {
  amount: 20,
  money: 5000,
};

console.log(user2.amount);
console.log(user2.name); //undefined because user2 doesn't have name property

//now let's set user1 as the prototype of user2
user2.__proto__ = user1; //setting prototype
console.log(user2.name); //Rohit, now user2 can access name property from user1
