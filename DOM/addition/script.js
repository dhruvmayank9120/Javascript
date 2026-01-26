const button = document.querySelector("button");
button.addEventListener("click", () => {
  //   const num1 = parseFloat(document.getElementById("first").value);
  //   const num2 = parseFloat(document.getElementById("second").value);
  const input1 = document.getElementById("first");
  const number1 = Number(input1.value);
  const input2 = document.getElementById("second");
  const number2 = Number(input2.value);
  if (isNaN(number1) || isNaN(number2)) {
    return;
  }
  const sum = number1 + number2;
  document.getElementById("result").textContent = `The sum is: ${sum}`;
});

//these 2 line means we are getting the values from the input fields with IDs "first" and "second" and converting them to floating-point numbers
//  const num1 = parseFloat(document.getElementById("first").value);
//   const num2 = parseFloat(document.getElementById("second").value);
// document.getElementById("result").textContent = `The sum is: ${sum}`; this means we are updating the text content of the HTML element with the ID "result" to display the calculated sum.

//BMI Calculator

