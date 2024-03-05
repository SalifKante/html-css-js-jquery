"use strict";

const quizData = [
  {
    question: "What is the most programming used language in 2023?",
    a: "Java",
    b: "C++",
    c: "JavaScript",
    d: "Python",
    correct: "c",
  },
  {
    question: "What does HTML stand for?",
    a: "Hello To My Love",
    b: "Hieroglyphics, To Machines Legible",
    c: "HyperText Markup Language",
    d: "Here The Men Live",
    correct: "c",
  },
  {
    question: "What does CSS stand for?",
    a: "Cock Sucking Service.",
    b: "Curb Side Sleeper",
    c: "Cascading Style Sheets",
    d: "Cock Staring syndrome",
    correct: "c",
  },
  {
    question: "What does HTTP stand for?",
    a: "Hyper Text To Pages",
    b: "Head To This Page",
    c: "Hypertext Transfer Protocol",
    d: "Happy To Take Price",
    correct: "c",
  },
];

const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const answerEls = document.querySelectorAll(".answer");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuestion];
  question.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      //Show result
      //   alert("You finished");
      result.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2> <button onclick='location.reload()'>Reload</button>`;
    }
  }
});
