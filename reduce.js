//reduce:A method that reduces an array to a single value by applying a function to each element step by step.

// const arr = [10, 20, 30, 40, 50];

//arr.reduce(callback function, initialization)

// const result = arr.reduce((acc, curr) => {
//   console.log(acc, curr);
//   acc = acc + curr;
//   return acc;
// }, 0);

// console.log(result);

let arr = [
  "orange",
  "apple",
  "banana",
  "orange",
  "apple",
  "banana",
  "orange",
  "grapes",
];
//final result comes in form of one object
//orange:3
//apple:2
//acc={}
const result = arr.reduce((acc, curr) => {
  if (acc.hasOwnProperty(curr)) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

console.log(result);
