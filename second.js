// for in loop: we don't use this with array
//arr is an object

const arr = [10,20,30,40,50];
arr.name="Rohit";
for(let key in arr){
    console.log(key, arr[key]);
}
