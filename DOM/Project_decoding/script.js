const questionBank = [
  {
    question: "Who has the most centuries in international cricket?",
    options: [
      "Sachin Tendulkar",
      "Virat Kohli",
      "Ricky Ponting",
      "Jacques Kallis",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question: "Which country won the first ICC Cricket World Cup?",
    options: ["Australia", "England", "West Indies", "India"],
    answer: "West Indies",
  },
  {
    question: "Who is known as the 'God of Cricket'?",
    options: ["Virat Kohli", "Don Bradman", "MS Dhoni", "Sachin Tendulkar"],
    answer: "Sachin Tendulkar",
  },
  {
    question: "What is the highest individual score in ODI cricket?",
    options: ["264", "200", "237", "275"],
    answer: "264",
  },
  {
    question: "Which bowler has taken the most wickets in Test cricket?",
    options: [
      "Muttiah Muralitharan",
      "Shane Warne",
      "James Anderson",
      "Anil Kumble",
    ],
    answer: "Muttiah Muralitharan",
  },
  {
    question: "Which Indian cricketer is known as 'Captain Cool'?",
    options: ["Virat Kohli", "MS Dhoni", "Rohit Sharma", "Sourav Ganguly"],
    answer: "MS Dhoni",
  },
  {
    question: "How many players are there in a cricket team?",
    options: ["9", "10", "11", "12"],
    answer: "11",
  },
  {
    question: "Which stadium is known as the 'Home of Cricket'?",
    options: ["MCG", "Eden Gardens", "Lord's", "Wankhede"],
    answer: "Lord's",
  },
  {
    question: "Who hit the first double century in ODI cricket?",
    options: [
      "Virender Sehwag",
      "Rohit Sharma",
      "Sachin Tendulkar",
      "Chris Gayle",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question: "Which country has won the most ICC Cricket World Cups?",
    options: ["India", "Australia", "England", "West Indies"],
    answer: "Australia",
  },
  {
    question: "Who is the highest run scorer in Test cricket?",
    options: [
      "Sachin Tendulkar",
      "Ricky Ponting",
      "Jacques Kallis",
      "Rahul Dravid",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question: "Which player is known as the 'Rawalpindi Express'?",
    options: ["Brett Lee", "Shoaib Akhtar", "Mitchell Starc", "Wasim Akram"],
    answer: "Shoaib Akhtar",
  },
  {
    question: "Which team won the ICC T20 World Cup 2024?",
    options: ["India", "Australia", "England", "South Africa"],
    answer: "India",
  },
  {
    question: "Who has the highest individual score in T20 Internationals?",
    options: ["Aaron Finch", "Chris Gayle", "Glenn Maxwell", "Rohit Sharma"],
    answer: "Glenn Maxwell",
  },
  {
    question: "Which Indian bowler is known as the 'Turbanator'?",
    options: [
      "Anil Kumble",
      "Harbhajan Singh",
      "Ravichandran Ashwin",
      "Jasprit Bumrah",
    ],
    answer: "Harbhajan Singh",
  },
  {
    question: "Which country hosted the first ICC T20 World Cup?",
    options: ["South Africa", "India", "England", "Australia"],
    answer: "South Africa",
  },
  {
    question: "Who is the fastest batsman to score 10000 ODI runs?",
    options: [
      "Virat Kohli",
      "Sachin Tendulkar",
      "Brian Lara",
      "AB de Villiers",
    ],
    answer: "Virat Kohli",
  },
  {
    question:
      "Which cricketer has hit the most sixes in international cricket?",
    options: ["Chris Gayle", "Rohit Sharma", "MS Dhoni", "Shahid Afridi"],
    answer: "Chris Gayle",
  },
  {
    question: "Which bowler has the best bowling figures in an ODI match?",
    options: [
      "Chaminda Vaas",
      "Glenn McGrath",
      "Muttiah Muralitharan",
      "Stuart Binny",
    ],
    answer: "Chaminda Vaas",
  },
  {
    question: "Which team won the IPL 2023?",
    options: ["CSK", "GT", "MI", "RCB"],
    answer: "CSK",
  },
  {
    question: "Which Indian cricketer is called the 'Hitman'?",
    options: ["Virat Kohli", "Rohit Sharma", "KL Rahul", "Shubman Gill"],
    answer: "Rohit Sharma",
  },
  {
    question: "Who has taken the most wickets in ODI cricket?",
    options: [
      "Muttiah Muralitharan",
      "Wasim Akram",
      "Waqar Younis",
      "Glenn McGrath",
    ],
    answer: "Muttiah Muralitharan",
  },
  {
    question: "Which country won the ICC Champions Trophy 2013?",
    options: ["India", "England", "Australia", "South Africa"],
    answer: "India",
  },
  {
    question: "Who was the first batsman to score 400 runs in a Test match?",
    options: ["Brian Lara", "Don Bradman", "Matthew Hayden", "Virender Sehwag"],
    answer: "Brian Lara",
  },
  {
    question: "Which Indian stadium has the largest seating capacity?",
    options: ["Wankhede", "Eden Gardens", "Narendra Modi Stadium", "Chepauk"],
    answer: "Narendra Modi Stadium",
  },
  {
    question: "Who has scored the fastest century in ODI cricket?",
    options: [
      "AB de Villiers",
      "Corey Anderson",
      "Shahid Afridi",
      "Virat Kohli",
    ],
    answer: "AB de Villiers",
  },
  {
    question: "Which country won the ICC Cricket World Cup 2011?",
    options: ["India", "Sri Lanka", "Australia", "Pakistan"],
    answer: "India",
  },
  {
    question: "Who holds the record for most runs in a single World Cup?",
    options: [
      "Rohit Sharma",
      "Sachin Tendulkar",
      "Virat Kohli",
      "Martin Guptill",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question: "Which team has won the most IPL titles?",
    options: ["CSK", "MI", "KKR", "RCB"],
    answer: "MI",
  },
  {
    question: "Which Indian bowler is known as 'Boom Boom'?",
    options: [
      "Irfan Pathan",
      "Jasprit Bumrah",
      "Mohammed Shami",
      "Zaheer Khan",
    ],
    answer: "Jasprit Bumrah",
  },
];

function randomQuestion() {
  const data = new Set();

  while (data.size !== 5) {
    const index = Math.floor(Math.random() * questionBank.length);
    data.add(questionBank[index]);
  }

  return [...data];
}

// select the form & result box
const form = document.querySelector("#quizForm");
const resultBox = document.querySelector("#result");

const problem = randomQuestion();

problem.forEach((obj, index) => {
  const div = document.createElement("div");
  div.className = "question";

  const para = document.createElement("p");
  para.textContent = `${index + 1}. ${obj.question}`;
  div.appendChild(para);

  obj.options.forEach((option) => {
    const label = document.createElement("label");
    const input = document.createElement("input");

    input.type = "radio";
    input.name = `question${index}`;
    input.value = option;

    label.appendChild(input);
    label.append(" " + option);

    div.appendChild(label);
    div.appendChild(document.createElement("br"));
  });

  // insert question ABOVE submit button
  form.insertBefore(div, form.lastElementChild);
});

// submit logic
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let score = 0;

  problem.forEach((obj, index) => {
    const selectedOption = form.querySelector(
      `input[name="question${index}"]:checked`,
    );

    if (selectedOption && selectedOption.value === obj.answer) {
      score++;
    }
  });

  resultBox.innerHTML = `
    <h2>Your Score: ${score} / 5</h2>
    <h3>Percentage: ${(score / 5) * 100}%</h3>
  `;
});
