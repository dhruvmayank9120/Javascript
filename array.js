const arr = [2, 35, 1, 8, 9, "rohit", true];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[3]);
//at is latest and takes negative index also.
// console.log(arr.at(1));

// const newarr = structuredClone(arr);
// console.log(newarr);
// console.log(newarr === arr);

//push-> adds element at the end
// arr.push(30);
// arr.push(50);
// console.log(arr);

//pop-> removes the last element
// arr.pop();
// console.log(arr);

//unshift-> adds element at the start
// arr.unshift("hello");
// console.log(arr);

//shift-> removes element from start
// arr.shift();
// console.log(arr);

//delete-> removes element from specific index but does not update length
// delete arr[2];
// console.log(arr);
// console.log(arr.length);

//indexOf-> gives index of element
//console.log(arr.indexOf(9));
//console.log(arr.indexOf("rohit"));
//console.log(arr.indexOf(100)); //-1 if not found

//includes-> returns true/false if element is present
//console.log(arr.includes(8));
//console.log(arr.includes("hello"));

//slice-> returns a new array from start to end-1 index, last index is not included.
// console.log(arr.slice(2, 4));

//splice-> modifies the original array, can add/remove elements
// arr.splice(2, 2, "a", "b"); //from index 2, remove 2 elements and add "a" and "b"
// console.log(arr.splice(2, 5));

// console.log(arr.toString());
// console.log(arr.join("*"));

//concat-> merges two arrays
const arr2 = [100, 200, 300];
const arr3 = [400, 500];
// const mergedArr = arr.concat(arr2);
// console.log(mergedArr);
// const mergedArr2 = arr.concat(arr2, arr3);
// console.log(mergedArr2);

// arr.push(arr2);
// console.log(arr);

//2-D array

let arr2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// console.log(arr2d);
// console.log(arr2d[1]);
// console.log(arr2d[1][2]);

//flattening a 2-D array
// let newarr = arr2d.flat();
// console.log(newarr);

//check if variable is array or not
let abc = [2, 1, 4, 1];
console.log(typeof abc);
console.log(Array.isArray(abc));

let ac = new Array(2, 34, 56, 11);
console.log(ac);

let ab = new Array(5); //creates an array of length 5 with empty items
console.log(ab.length);
