//set: collection of unique values and can be of any type such as primitve(numbers, string etc).

// const set1 = new Set([10, 20, 30, 40, 20, 10, 30, 50, 40]);
// console.log(set1);
// console.log(typeof set1);//object

// const set1 = new Set();
// set1.add(4);
// set1.add(6);
// set1.add("Rohit");
// set1.add(30);

// console.log(set1);
// console.log(set1.size);

// const user_id = new Set([
//   "rohit_negi9",
//   "Mohi_91",
//   "ravi.93",
//   "chavi_90",
//   "sumit_87",
// ]);

// let new_user = "rohit_negi9";
// console.log(user_id.has(new_user));

// user_id.clear();
// console.log(user_id);

// let arr = new Set([10, 20, 30, 40, 50, 20, 10, 30, 50]);
// const set1 = new Set(arr);
// arr = [...set1];
// console.log(arr);

//Union

// let set1 = new Set([10, 20, 30, 40, 50]);
// let set2 = new Set([10, 20, 70, 80]);

// let set3 = new Set([...set1, ...set2]);
// console.log(set3);

//Intersection

// let set1 = new Set([10, 20, 30, 40, 70, 90, 68]);
// let set2 = new Set([10, 40, 68, 39]);

// const result = [...set1].filter((num) => set2.has(num));

// console.log(result);

//Iterate over set
//for of:iterator

// for (let value of set1) {
//   console.log(value);
// }
//for each can also be used
// set1.array.forEach((value) => {
//   console.log(value);
// });
