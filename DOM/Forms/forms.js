const form = document.querySelector("form");

//--->THEORIES ABOUT FORM EVENTS<---//

//-->input: input event fires every time the value changes
// form.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

//change: change event only fires when the input loses focus
// form.addEventListener("change", (event) => {
//   console.log(event.target.value);
// });

//-->focus event: focus event fires when the input gains focus and does not bubble
// form.addEventListener(
//   "focus",
//   (event) => {
//     console.log("event.target.value");
//   },
//   true,
// ); //useCapture set to true to capture the event during the capturing phase

//-->focusin event: focusin event fires when the input gains focus and bubbles
// form.addEventListener("focusin", (event) => {
//   console.log(event.target.value);
// });

//-->blur event: blur event fires when the input loses focus and does not bubble
// form.addEventListener("blur", (event) => {
//   console.log(event.target.value);
// });

//-->focusout event: focusout event fires when the input loses focus and bubbles
// form.addEventListener("focusout", (event) => {
//   console.log(event.target.value);
// });

//->click event: click event fires when the element is clicked
// form.addEventListener("click", (event) => {
//   console.log("form was clicked");
//      console.log(event.target.value);
// });

//->dblclick event: dblclick event fires when the element is double clicked
// form.addEventListener("dblclick", (event) => {
//   console.log("form was double clicked");
//     console.log(event.target.value);
// });

//-->submit event: submit event fires when the form is submitted
// form.addEventListener("submit", (event) => {
//   console.log(event.target.value);
// });

//-->reset event: reset event fires when the form is reset
// form.addEventListener("reset", (event) => {
//   console.log("form was reset");
//   console.log(event.target.value);
// });

form.addEventListener("submit", (event) => {
  event.preventDefault(); //prevents the default form submission behavior

  //   const first = document.getElementById("first");
  //   console.log(first.value);

  //   const second = document.getElementById("second");
  //   console.log(second.value);

  //   const third = document.getElementById("third");
  //   console.log(third.value);

  const data = new FormData(form); //creates a new FormData object from the form
  //   console.log(data);
  console.log(Array.from(data.keys())); //converts the FormData object to an array of key-value pairs
  console.log(Array.from(data.values())); //converts the FormData object to an array of values

  //note->keys value pairs from the form is getting submitted

  for (let key of data.keys()) {
    console.log(key);
  }

  const result = document.getElementById("result");
  result.innerText = `${first.value} ${second.value} is a good boy who is ${third.value} years old.`;

  document.body.append(result);
});
