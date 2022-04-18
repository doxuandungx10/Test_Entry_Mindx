window.onload = function () {
  let questions;
  $.getJSON(
    "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple",
    function (data) {
      questions = data.results.map((obj) => ({
        ...obj,
        answers: obj.incorrect_answers.concat(obj.correct_answer),
      }));

      let arr = [false, false, false, true];
      f = function (x, y) {
        return x.map((item, index) => {
          return {
            text: item,
            correct: y[index],
          };
        });
      };
      let arr2 = questions.map((obj) => f(obj.answers, arr));
      questions = data.results.map((obj, index) => ({
        ...obj,
        answers: arr2[index],
      }));
      console.log(questions);
    }
  );

  const startButton = document.getElementById("start-btn");
  const nextButton = document.getElementById("next-btn");
  const questionContainerElement =
    document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-buttons");

  let shuffledQuestions, currentQuestionIndex;

  startButton.addEventListener("click", startGame);
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
  });

  function startGame() {
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
  }

  function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  }

  function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answerButtonsElement.appendChild(button);
    });
  }

  function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }

  function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button) => {
      setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove("hide");
    } else {
      startButton.innerText = "Restart";
      startButton.classList.remove("hide");
    }
  }

  function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add("correct");
    } else {
      element.classList.add("wrong");
    }
  }

  function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
  }
};
