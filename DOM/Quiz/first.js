// const original_answer = [
//   "Sachin Tendulkar",
//   "West Indies",
//   "Sachin Tendulkar",
//   "264",
//   "Muttiah Muralitharan",
// ];

const original_answer = {
  q1: "Sachin Tendulkar",
  q2: "West Indies",
  q3: "Sachin Tendulkar",
  q4: "264",
  q5: "Muttiah Muralitharan",
};

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);

  //   const answer = Array.from(data.values());

  //   let result = 0;
  //   for (let i = 0; i < original_answer.length; i++) {
  //     {
  //       if (answer[i] === original_answer[i]) {
  //         result += 1;
  //       }
  //     }

  let result = 0;

  for (let [key, value] of data.entries()) {
    if (value === original_answer[key]) {
      result += 1;
    }
  }

  const out = document.getElementById("out");
  out.innerText = `You have scored ${result}which is correct out of 5 questions`;
  // form.reset();
});
