// let arr = [10,22,33,41,59,62];

//filter also expects callback function
// const result = arr.filter((num)=>{
//     return num%2==0;

// })
// console.log(result);

const students = [
    {name:"Rohan", age:22, marks:70},
    {name:"Mohan", age:25, marks:80},
    {name:"Darshan", age:27, marks:30},
    {name:"Mohit", age:29, marks:40},
    {name:"Sadik", age:34, marks:90},
]
const result = students.filter((studs)=>{
    return studs.marks>50;
})
console.log(result);

//destructured marks
const results = students.filter(({marks})=>{
    return marks>50;
})
console.log(results);
