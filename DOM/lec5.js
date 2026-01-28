// const red = document.getElementById("red");
// const blue = document.getElementById("blue");
// const green = document.getElementById("green");
// const orange = document.getElementById("orange");
// const purple = document.getElementById("purple");
// const body = document.body;

// red.addEventListener("click", () => {
//   body.style.backgroundColor = "red";
// });

// blue.addEventListener("click", () => {
//   body.style.backgroundColor = "blue";
// });

// orange.addEventListener("click", () => {
//   body.style.backgroundColor = "orange";
// });

// green.addEventListener("click", () => {
//   body.style.backgroundColor = "green";
// });

// purple.addEventListener("click", () => {
//   body.style.backgroundColor = "purple";
// });

// const button = document.querySelectorAll("button");
// const body = document.body;
// // console.log(button);

// button.forEach((button) => {
//   //   console.log(button.id);
//   button.addEventListener("click", () => {
//     body.style.backgroundColor = button.id;
//   });
// });

//event bubbling and event capturing: it means when we have nested elements and we click on the innermost element, the event first triggers on the innermost element and then bubbles up to the outer elements. This is called event bubbling. In event capturing, the event is first captured by the outermost element and then propagated to the innermost element.

//event delegation: it is a technique of using event bubbling to handle events at a higher level in the DOM rather than attaching event listeners to individual elements. This is useful when we have a large number of elements and we want to handle events for all of them without attaching event listeners to each element individually.

const root = document.getElementById("root");

root.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON")
    document.body.style.backgroundColor = event.target.id;
});
