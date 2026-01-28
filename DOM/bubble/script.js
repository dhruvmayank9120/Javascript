const grandParent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

//event bubbling and event capturing

// child.addEventListener(
//   "click",
//   () => {
//     console.log("child clicked");
//   },
//   false,
// );

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("parent clicked");
//   },
//   false,
// );

// grandParent.addEventListener(
//   "click",
//   () => {
//     console.log("grandparent clicked");
//   },
//   false,
// );

//event capturing
child.addEventListener(
  "click",
  (event) => {
    // console.log("child clicked");
    console.log(event.target);
  },
  true,
);

parent.addEventListener(
  "click",
  (event) => {
    // console.log("parent clicked");
    console.log(event.target);
  },
  true,
);

grandParent.addEventListener(
  "click",
  (event) => {
    // console.log("grandparent clicked");
    console.log(event.target);
  },
  true,
);
