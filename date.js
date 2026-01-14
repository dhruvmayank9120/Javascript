// const d = new Date();
// console.log(d.toDateString());
// console.log(d.toString());
// console.log(d.toISOString());

// console.log(typeof d);

// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMilliseconds());
// console.log(d.getMinutes());
// console.log(d.getMonth());
// console.log(d.getSeconds());
// console.log(d.getTime());

// const now = Date.now();
// console.log(now);

//console.log(d);

// const d = new Date("2025-10-27");
// const d1 = new Date("2025-10-16T10:10:12");
// const d2 = new Date(2025, 9, 27); //month is 0 based
// console.log(d);
// console.log(d1);
// console.log(d2);
// console.log(d.toDateString());
// console.log(d1.toDateString());
// console.log(d2.toDateString());

//can give 7 values in date constructor year, month, date, hours, minutes, seconds, milliseconds
// const d3 = new Date(2025, 9, 27, 10, 20, 30, 456);
// console.log(d3.toString());

//points to note:
//Number :0 based start
//String: 1 based start

//setting date components

// const d = new Date();
// d.setDate(15);
// d.setFullYear(2026);
// d.setMonth(3); //month is 0 based
// console.log(d.toDateString());
// console.log(d.toLocaleDateString());

//date calculations
// const d1 = new Date("2025-10-27");
// const d2 = new Date("2025-11-10");
//console.log(d2 - d1); //in milliseconds

// const diffInMs = d2 - d1;
// const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
// console.log(diffInDays);

//countdown timer for olympics
//Days, hour, ,minutes, seconds

const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00");

let diff = date2 - date1; //in milliseconds
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(days);
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
console.log(hours);
const minutes = Math.floor((diff / (1000 * 60)) % 60);
console.log(minutes);
const seconds = Math.floor((diff / 1000) % 60);
console.log(seconds);

console.log(
  `Olympics Countdown: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
);
