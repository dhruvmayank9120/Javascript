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

function generateNewQuote() {
  const text = document.getElementById("quote");

  const index = Math.floor(Math.random() * quotes.length);
  text.textContent = quotes[index];
}
setInterval(generateNewQuote, 5000);
