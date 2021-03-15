const questions = [
  {
    question: "What is 31 + 10?",
    answers: [
      { text: "41", correct: true },
      { text: "21", correct: false },
      { text: "42", correct: false },
      { text: "51", correct: false },
    ],
  },
  {
    question: "What is 2 + 3?",
    answers: [
      { text: "23", correct: false },
      { text: "10", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false },
    ],
  },
  {
    question: "What is 100 + 200?",
    answers: [
      { text: "600", correct: false },
      { text: "300", correct: true },
      { text: "3000", correct: false },
      { text: "100", correct: false },
    ],
  },
  {
    question: "What is 25 + 25?",
    answers: [
      { text: "50", correct: true },
      { text: "0", correct: false },
      { text: "40", correct: false },
      { text: "25", correct: false },
    ],
  },
  {
    question: "What is 100 - 25?",
    answers: [
      { text: "50", correct: false },
      { text: "35", correct: false },
      { text: "25", correct: false },
      { text: "75", correct: true },
    ],
  },
  {
    question: "What is 125 + 25?",
    answers: [
      { text: "126", correct: false },
      { text: "75", correct: false },
      { text: "150", correct: true },
      { text: "100", correct: false },
    ],
  },
  {
    question: "What is 45 + 15?",
    answers: [
      { text: "60", correct: true },
      { text: "50", correct: false },
      { text: "70", correct: false },
      { text: "80", correct: false },
    ],
  },
  {
    question: "What is 20 + 20?",
    answers: [
      { text: "30", correct: false },
      { text: "0", correct: false },
      { text: "50", correct: false },
      { text: "40", correct: true },
    ],
  },
  {
    question: "What is 60 - 30?",
    answers: [
      { text: "25", correct: false },
      { text: "30", correct: true },
      { text: "42", correct: false },
      { text: "51", correct: false },
    ],
  },
  {
    question: "What is 15 + 6?",
    answers: [
      { text: "41", correct: false },
      { text: "31", correct: false },
      { text: "21", correct: true },
      { text: "51", correct: false },
    ],
  },
  {
    question: "What is 31 + 21?",
    answers: [
      { text: "41", correct: false },
      { text: "31", correct: false },
      { text: "21", correct: false },
      { text: "52", correct: true },
    ],
  },
  {
    question: "What is 2 x 3?",
    answers: [
      { text: "32", correct: false },
      { text: "23", correct: false },
      { text: "6", correct: true },
      { text: "5", correct: false },
    ],
  },
  {
    question: "What is 1 x 4?",
    answers: [
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "14", correct: false },
      { text: "41", correct: false },
    ],
  },
  {
    question: "What is 3 x 100?",
    answers: [
      { text: "100", correct: false },
      { text: "30", correct: false },
      { text: "300", correct: true },
      { text: "3", correct: false },
    ],
  },
  {
    question: "What is 15 + 30?",
    answers: [
      { text: "41", correct: false },
      { text: "55", correct: false },
      { text: "40", correct: false },
      { text: "45", correct: true },
    ],
  },
  {
    question: "What is 6 + 5?",
    answers: [
      { text: "10", correct: false },
      { text: "31", correct: false },
      { text: "11", correct: true },
      { text: "1", correct: false },
    ],
  },
  {
    question: "What is 6 x 1?",
    answers: [
      { text: "6", correct: true },
      { text: "7", correct: false },
      { text: "5", correct: false },
      { text: "61", correct: false },
    ],
  },
  {
    question: "What is 15 + 5?",
    answers: [
      { text: "21", correct: false },
      { text: "10", correct: false },
      { text: "20", correct: true },
      { text: "25", correct: false },
    ],
  },
  {
    question: "What is 10 x 1?",
    answers: [
      { text: "11", correct: false },
      { text: "10", correct: true },
      { text: "100", correct: false },
      { text: "9", correct: false },
    ],
  },
  {
    question: "What is 11 x 1?",
    answers: [
      { text: "111", correct: false },
      { text: "12", correct: false },
      { text: "11", correct: true },
      { text: "21", correct: false },
    ],
  },
];

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame);

const getQuestion = document.getElementById("question");

const getAnswersButtons = document.getElementsByClassName("btn");

const answers = document.getElementById("answers");

const quizTitle = document.getElementById("quiz-title");

const resetButton = document.getElementById("reset-btn");

// const nextButton = document.getElementById("next-btn");

const finalScore = document.getElementById("final-score");

const scoreAdd = document.getElementById("score-add");

const yourScore = document.getElementById("your-score");

const endScore = document.getElementById("end-score");
// nextButton.addEventListener("click", () => {
//   currentQuestionIndex++;
//   nextQuestion();
// });

let questions_array = [];

let anArrayOfUniqueNumbers = [];
let numberGenerator = function(arr) {
  if (arr.length >= 10) return;
  let newNumber = Math.floor(Math.random() * 19);
  if (arr.indexOf(newNumber) < 0) {
    arr.push(newNumber);
  }
  numberGenerator(arr);
};
numberGenerator(anArrayOfUniqueNumbers);
console.log(anArrayOfUniqueNumbers)

for (let index = 0; index < 10; index++) {
  let result = questions[anArrayOfUniqueNumbers[index]]
  questions_array.push(result);
}
console.log(questions_array)

let currentQuestionIndex, shuffledQuestions;

function startGame() {
  getQuestion.classList.remove("hide");
  answers.classList.remove("hide");
  startButton.classList.add("hide");
  quizTitle.classList.add("hide");
  // nextButton.classList.remove("hide");
  resetButton.classList.add("hide");
  yourScore.classList.add("hide");
  scoreAdd.classList.remove("hide");
  shuffledQuestions = questions_array.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  finalScore.innerHTML = 0;
  nextQuestion();
}

function nextQuestion() {
  // console.log({ currentQuestionIndex });
  if (currentQuestionIndex === questions_array.length) {
    endScore.innerHTML = (score / questions_array.length) * 100 + "%";
    endGame();
  } else {
    showQuestion(currentQuestionIndex);
    // console.log({ currentQuestionIndex });
    // console.log({ secondconsolelog: questions.length - 1 });
    currentQuestionIndex + 1;
  }
}

function showQuestion(current) {
  const currentQuestion = questions_array[current];
  getQuestion.innerText = currentQuestion.question;
  //questions.forEach((question) => console.log(question.answers));

  currentQuestion.answers.forEach((answer, index) => {
    getAnswersButtons[index].innerText = answer.text;
    getAnswersButtons[index].addEventListener("click", checkAnswer);
  });
}

let score = 0;

function checkAnswer(event) {
  const currentQuestion = questions_array[currentQuestionIndex];
  currentQuestion.answers.forEach((answer) => {
    if (answer.correct) {
      if (answer.text === event.target.innerText) {
        score++;
      }
    }
  });
  // console.log({ score });
  finalScore.innerHTML = score;
  currentQuestionIndex++;
  nextQuestion();
  //console.log(event.target.innerText)
}

function endGame() {
  resetButton.classList.remove("hide");
  yourScore.classList.remove("hide");
  getQuestion.classList.add("hide");
  answers.classList.add("hide");
  scoreAdd.classList.add("hide");

  // nextButton.classList.add("hide");
  // startButton.classList.remove("hide");

  resetButton.addEventListener("click", () => {
    resetGame();
  });
}

function resetGame() {
  // finalScore.innerHTML = 0;
  currentQuestionIndex = 0;
  score = 0;
  startButton.classList.remove("hide");
  quizTitle.classList.remove("hide");
  resetButton.classList.add("hide");
  yourScore.classList.add("hide");
  scoreAdd.classList.add("hide");
}
