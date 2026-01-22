// let obj = {};

// obj.name = "Rohit";
// obj.age=20;
//key value writable enumerbale configurable
// console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
//writable=true, can I change the value
// obj.name="Mohit";
//configurable: true means I can change values of writable, enumerable, configurable

// let obj = {};
// Object.defineProperty(obj, 'name',{
//     value:"rohit",
//     writable:false,
//     enumerable:true,
//     configurable:true,
// });

// obj.name="mohit";

// console.log(obj);

// const obj1={
//     name:"rohit",
//     age:23,
//     account_no:30001,
// }

// Object.defineProperty(obj1, 'account_no',{
//     writable:false
// })

// obj1.account_number=20001;
// console.log(obj1.account_no);

//enumerbale:jis bhi key ka enumerable true hoga, un sabka access hoga ya print hoga
//inherit hoke bhi koi bhi property or key aati hai, uska enumerbale true hoga
const customer={
    name:"Rohit",
    age:23,
    account_no:123,
    balance:2000,
}

let customer2 = Object.create(customer);
customer2.city="haridwar";
customer.place = "Delhi";

// Object.defineProperty(customer, "name",{
//     enumerable:false,
// })

// for(let key in customer2)
// {
// console.log(key);
// }

Object.defineProperty(Object.prototype,'toString',{
    enumerbale:true,
})

for (let key in customer){
    console.log(key);
}
