//Callback function:** A function that is passed as an argument to another function and executed later.


// function name(callback) {
//     console.log("hello, I am name");
//     callback();   // calling the passed function
// }

// function greet() {
//     console.log("I am call back fun");
// }

// name(greet);

// const name = (callback) => {
//     console.log("hello, I am name");
//     callback();
// };

// const greet = () => {
//     console.log("I am callback function");
// };

// name(greet);

// function fetchData()
// {
//     console.log("I am fetching data");
// }

// setInterval(fetchData, 5000);

// for of loop:direcctly takes access of values and prints it

// const arr=[10,20,30,50,60];
// for(let value of arr)
// {
//     console.log(value);
// }

// let str = "Rohit is a good boy";
// for(let value of str)
// {
//     console.log(value);
// }

//don't use for of loop in object because objects are not iterable

// const obj = {
//     name:"Chavvi",
//     age:22,
//     gender:"female"
// };

// for(let value of object)
// {
//     console.log(value);
// }

//if you want to print it then we have to make values an array then print
// for(let value of Object.keys(obj))
// {
//     console.log(value, obj[value]);
// }

//for each

let arr = [10,20,30,40,50];

// arr.forEach(function(num){
//     console.log(num)
// })

//printing using arrow function
//single argument:number
//second argument:index
//third argument:array pass
//can only take 3 arguments to pass

//arr.forEach(callBackFuntion)

// function greet(num)
// {
//     console.log(num);
// }

// arr.forEach(greet);

// arr.forEach((num,index,a)=>{
//     a[index]= num*2;
// console.log(num,index);
// })

// console.log(arr);
