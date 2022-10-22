const quizData = [
  {
    question: " language run in a web browser?",
    a: "java",
    b: "html",
    c: "python",
    d: "javascript",
    correct: "b",
  },

  {
    question: "CSS stands for?",
    a: "java",
    b: "Cascade Style sheet",
    c: "python",
    d: "cascade style system",
    correct: "b",
  },
  {
    question: "which language run in a web browser?",
    a: "java",
    b: "html",
    c: "python",
    d: "javascript",
    correct: "d",
  },
  {
    question: "which language run in a web browser?",
    a: "java",
    b: "html",
    c: "python",
    d: "javascript",
    correct: "d",
  },
  {
    question: "which language run in a web browser?",
    a: "java",
    b: "html",
    c: "python",
    d: "javascript",
    correct: "d",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

let getSelected = () => {
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
};

submitBtn.addEventListener("click", () => {
  let answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>your answered ${score}/${quizData.length}Questions correctly></h2>
    <button onclick= "location.reload()">Exit</button>`;
    }
  }
});
