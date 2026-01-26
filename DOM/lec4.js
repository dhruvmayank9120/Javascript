//events: events means actions that happen in our application
//examples of events: user clicks a button, user submits a form, user hovers over an element

const quotes = [
  "Small steps every day lead to massive success.",
  "Discipline will take you where motivation can’t.",
  "Don’t wait for the perfect time. Start now.",
  "Consistency beats talent when talent is not consistent.",
  "Dream big, but act bigger.",
  "Hard work in silence, let success make the noise.",
  "Your future is created by what you do today, not tomorrow.",
  "Focus. Learn. Build. Repeat.",
  "Struggle is a sign that you’re growing.",
  "If it’s easy, everyone would do it.",
  "Work until your idols become your competitors.",
  "Be obsessed with improvement, not perfection.",
  "Success is boring — it’s just daily discipline.",
  "One day or day one — you decide.",
  "Build skills so strong that opportunities chase you.",
  "Don’t compare, compete with your past self.",
  "Slow progress is still progress. Don’t stop.",
  "Learn like a beginner, build like a pro.",
  "The pain of discipline is better than the pain of regret.",
  "Stay hungry. Stay foolish. Stay building.",
];

// function generateNewQuote() {
//   const text = document.getElementById("quote");

//   const index = Math.floor(Math.random() * quotes.length);
//   text.textContent = quotes[index];
// }
// setInterval(generateNewQuote, 5000);

const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  console.log(event.target);
  console.log(event.type);
  console.log(event.clientX);
  const text = document.getElementById("quote");

  const index = Math.floor(Math.random() * quotes.length);
  text.textContent = quotes[index];
});

//-->keyboard events
//keydown, keyup, keypress: they all means when user presses a key on the keyboard

// document.addEventListener("keydown", () => {
//   const text = document.getElementById("quote");

//   const index = Math.floor(Math.random() * quotes.length);
//   text.textContent = quotes[index];
// });

//-->event object: this means whenever an event happens, an object is created which contains information about that event

// document.addEventListener("keydown", (event) => {
//      console.log(event.key); //gives the key that was pressed
//   if (event.key === "Enter") {
//     const text = document.getElementById("quote");

//     const index = Math.floor(Math.random() * quotes.length);
//     text.textContent = quotes[index];
//   }
//   console.log(event.target);
// });
