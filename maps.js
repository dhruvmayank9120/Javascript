//map:A method that creates a new array by applying a function to each element of an existing array, it remembers the order of insertions also
//key-value pair:key should be unique
// const arr = [1,2,4,5];
// const result = arr.map((num)=>{
//     return num*num;
// })
// console.log(result);

//chaining is possible
// const arr = [1,2,3,4,5,6];
// const result = arr.filter((num)=> num%2==0).map((num)=>num*num);
// console.log(result);

//when duplicate keys are entered it will update the value of the key
// const map1 = new Map();
// map1.set(3, 90);
// map1.set("Rohit", 45);
// map1.set(20, "Mohan");
// map1.set("Rohit", 40);
// console.log(map1);

// map1.delete(3); //delete

// console.log(map1);
// console.log(map1.has("Rohit"));
// console.log(map1.size);

//second way of making a map

const map1 = new Map([
  [4, "rohit"],
  ["Mohan", "rohan"],
  [30, 9],
  [63, 78],
]);

// console.log(map1);
//for of loop

// for (let value of map1) {
//   console.log(value);
// }

//Object:
//keys:string or symbol
//maps:
//keys:number, string, object
