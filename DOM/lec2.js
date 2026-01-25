//---> code for digital clock <---//

// function timing() {
//   const timer = document.getElementById("root");
//   const now = new Date();
//   const IndianTime = now.toLocaleTimeString();
//   timer.innerHTML = IndianTime;
// }
//program will crash becuause it is calling timing function infinite times without any delay
// while (true) {
//   timing();
// }

//we put this because we want to call timing function after every 1 second
// setInterval(timing, 1000);

// const timer = document.getElementById("root");
// timer.style.fontSize = "200px";
// timer.style.display = "flex";
// timer.style.justifyContent = "center";
// timer.style.alignItems = "center";
// timer.style.height = "100vh";

//---->learning access by css selector

// const id = document.querySelector("#first");
// id.innerHTML = "hello money";

// const id2 = document.querySelector(".header2");
// id2.style.backgroundColor = "pink";

//-->How to iterate over nodelist

//const obj = document.querySelectorAll(".header1");

//1. Object.forEach((val) => {
//   console.log(val);
// });

//2. for(let val of obj)
//console.log(val);

//3. for(let i=0;i<obj.length;i++)
//console.log(obj[i]);

//convert NodeList into array
//Array.from(obj)

//************************* */
// const obj = document.getElementsByTagName("h1");

// let team = document.getElementsByTagName("li");

//How to iterate over it

//1. for(let val of team)
//     console.log(val)

//2. for(let i=0;i<team.length;i++)
//     team[i].style.color="black"

//3. Array.from(team).forEach((val) => {
//     console.log(val);
// });

//---->Accessing using relationships

//************************* */

// const list = document.querySelector("li");
// console.log(list.parentElement);
// console.log(list.parentNode);

// const par = document.querySelector("ul");
// console.log(par);
// console.log(par.childNodes);
// console.log(par.children);
// console.log(par.firstChild);
// console.log(par.firstElementChild);
// console.log(par.lastChild);
// console.log(par.lastElementChild);

//innerHTML: this means it will get the html content inside the element
//textContent: this means it will get the text content inside the element
//innerText:this means it will get the visible text content inside the element
