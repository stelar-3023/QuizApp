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
];

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame);

const getQuestion = document.getElementById("question");
const getAnswersButtons = document.getElementsByClassName("btn");

const resetButton = document.getElementById("reset-btn");

const nextButton = document.getElementById("next-btn");
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  nextQuestion();
});

let currentQuestionIndex;

function startGame() {
  startButton.classList.add("hide");
  nextButton.classList.remove("hide");
  currentQuestionIndex = 0;
  nextQuestion();
}

function nextQuestion() {
  console.log(currentQuestionIndex);
  if (currentQuestionIndex === questions.length - 1) {
    //score
  } else {
    showQuestion(currentQuestionIndex);
    // console.log(currentQuestionIndex);
    console.log(questions.length - 1);
    currentQuestionIndex + 1;
  }
}

function showQuestion(current) {
  const currentQuestion = questions[current];
  getQuestion.innerText = currentQuestion.question;
  //questions.forEach((question) => console.log(question.answers));

  currentQuestion.answers.forEach((answer, index) => {
    getAnswersButtons[index].innerText = answer.text;
    getAnswersButtons[index].addEventListener("click", checkAnswer);
  });
}

let score = 0;

function checkAnswer(event) {
  const currentQuestion = questions[currentQuestionIndex];
  currentQuestion.answers.forEach((answer) => {
    if (answer.correct) {
      if (answer.text === event.target.innerText) {
        score++;
      }
    }
  });
  //console.log(event.target.innerText)
}

function endGame() {
  if (currentQuestion === currentQuestionIndex) {
    resetButton.classList.remove("hide");
    nextButton.classList.add("hide");
    startButton.classList.remove("hide");
  }

  resetButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
  });
}
