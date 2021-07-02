//FIRST TRY
// let quizzRandom = document.getElementById("questionsRandom");
// const questionRandom = () => {
//   //   alert("ima wrok");
//   fetch(`https://opentdb.com/api.php?amount=10`)
//     .then((response) => response.json())
//     .then((loadedQuestions) => {
//       console.log(loadedQuestions);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };
// questionRandom();
// quizzRandom.addEventListener("load", questionRandom);

// SECOND TRY
function randomArrayShuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

window.onload = sendApiRequest;

async function sendApiRequest() {
  let response = await fetch(
    `https://opentdb.com/api.php?amount=50&category=9&type=multiple`
  );
  console.log(response);
  let data = await response.json();
  console.log(data);

  let answersArray = [];
  answersArray.push(data.results[0].correct_answer);
  answersArray.push(data.results[0].incorrect_answers[0]);
  answersArray.push(data.results[0].incorrect_answers[1]);
  answersArray.push(data.results[0].incorrect_answers[2]);
  console.log(answersArray);

  // answersArray.sort(() => Math.floor(Math.random() * 4);
  // console.log(answersArray);
  const newArray = randomArrayShuffle(answersArray);
  console.log(newArray);
  useApiData(newArray, data);
}

function useApiData(newArray, data) {
  document.getElementById("questionsRandom").innerHTML =
    data.results[0].question;
  let answer1 = document.getElementById("answer1");
  answer1.innerHTML = newArray[0];
  answer1.addEventListener("click", (e) => {
    if (newArray[0] === data.results[0].correct_answer) {
      answer1.style.backgroundColor = "#1bb87e";
      setTimeout(function () {
        window.location.assign("./questionsRandom.ejs");
      }, 700);
    } else {
      answer1.style.backgroundColor = "lightcoral";
    }
  });
  let answer2 = document.getElementById("answer2");
  answer2.innerHTML = newArray[1];
  answer2.addEventListener("click", (e) => {
    if (newArray[1] === data.results[0].correct_answer) {
      answer2.style.backgroundColor = "#1bb87e";
      setTimeout(function () {
        window.location.assign("./questionsRandom.ejs");
      }, 700);
    } else {
      answer2.style.backgroundColor = "lightcoral";
    }
  });
  let answer3 = document.getElementById("answer3");
  answer3.innerHTML = newArray[2];
  answer3.addEventListener("click", (e) => {
    if (newArray[2] === data.results[0].correct_answer) {
      answer3.style.backgroundColor = "#1bb87e";
      setTimeout(function () {
        window.location.assign("./questionsRandom.ejs");
      }, 700);
    } else {
      answer3.style.backgroundColor = "lightcoral";
    }
  });
  let answer4 = document.getElementById("answer4");
  answer4.innerHTML = newArray[3];
  answer4.addEventListener("click", (e) => {
    if (newArray[3] === data.results[0].correct_answer) {
      answer4.style.backgroundColor = "#1bb87e";
      setTimeout(function () {
        window.location.assign("./questionsRandom.ejs");
      }, 700);
    } else {
      answer4.style.backgroundColor = "lightcoral";
    }
  });
}

// let correctAnswer = document.getElementById("answer1");
// correctAnswer.addEventListener("click", () => {
//   alert("Correct");
//   sendApiRequest();
// });

// function choicesAnswers(data) {
//   let answers = Math.floor(Math.random() * 4);
//   if ((answers = data.results[0].correct_answer)) return true;
//   else if ((answers = data.results[0].incorrect_answers[0])) return false;
//   else if ((answers = data.results[0].incorrect_answers[1])) return false;
//   else if ((answers = data.results[0].incorrect_answers[2])) return false;
//   else console.log("choose and answer");
// }

// let answer = document.getElementsByClassName("btn-answer");
// answer.addEventListener("click", () => {
//   alert("Correct");
//   sendApiRequest();
// });

// THIRD TRY
// // Questions
// const question = document.getElementById("questionsRandom");
// const answers = Array.from(document.getElementsByClassName("btn-answer"));
// console.log(answers[1].innerHTML);
// console.log(answers);
// let currentQuestions = {};
// let acceptingAnswers = false;
// let availableQuestions = [];

// let questions = []; // the questions from the fetched api

// fetch(`https://opentdb.com/api.php?amount=10&category=9&type=multiple`)
//   .then((response) => response.json())
//   .then((loadedQuestions) => {
//     console.log(loadedQuestions.results);

//     questions = loadedQuestions.results.map((loadedQuestion) => {
//       const formattedQuestion = {
//         question: loadedQuestion.question,
//       };
//       const answerChoices = [...loadedQuestion.incorrect_answers];
//       formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
//       answerChoices.splice(
//         formattedQuestion.answer - 1,
//         0,
//         loadedQuestion.correct_answer
//       );
//       answerChoices.forEach((choice, index) => {
//         formattedQuestion["choice" + (index + 1)] + choice;
//       });
//       return formattedQuestion;
//     });
//     startRandom();
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// startRandom = () => {
//   availableQuestions = [...questions];
//   // console.log(availableQuestions);
//   getNewQuestion();
// };

// getNewQuestion = () => {
//   if (availableQuestions.length === 0) {
//     return window.location.assign("./categories.ejs");
//   }
//   const questionIndex = Math.floor(Math.random() * availableQuestions.length);
//   currentQuestion = availableQuestions[questionIndex];
//   question.innerText = currentQuestion.question;

//   answers.forEach((choice) => {
//     const number = choice.dataset["number"];
//     choice.innerText = currentQuestion["choice" + number];
//   });

//   availableQuestions.splice(questionIndex, 1);

//   acceptingAnswers = true;
// };
// answers.forEach((choice) => {
//   choice.addEventListener("click", (e) => {
//     if (!acceptingAnswers) return;

//     acceptingAnswers = false;
//     const selectedChoice = e.target;
//     const selectedAnswer = selectedChoice.dataset["number"];
//     // console.log(selectedAnswer);
//     getNewQuestion();
//   });
// });

// const questionRandom = () => {

// };
// startRandom();
// question.addEventListener("load", questionRandom);

// MANUALLY CREATED QUESTIONS (works)
// let questions = [
//   {
//     question: "Inside which HTML element do we put the JavaScript??",
//     choice1: "<script>",
//     choice2: "<javascript>",
//     choice3: "<js>",
//     choice4: "<scripting>",
//     answer: 1,
//   },
//   {
//     question:
//       "What is the correct syntax for referring to an external script called 'xxx.js'?",
//     choice1: "<script href='xxx.js'>",
//     choice2: "<script name='xxx.js'>",
//     choice3: "<script src='xxx.js'>",
//     choice4: "<script file='xxx.js'>",
//     answer: 3,
//   },
//   {
//     question: " How do you write 'Hello World' in an alert box?",
//     choice1: "msgBox('Hello World');",
//     choice2: "alertBox('Hello World');",
//     choice3: "msg('Hello World');",
//     choice4: "alert('Hello World');",
//     answer: 4,
//   },
// ];

// startRandom = () => {
//   availableQuestions = [...questions];
//   console.log(availableQuestions);
//   getNewQuestion();
// };
// startRandom();
// getNewQuestion = () => {
//   if (availableQuestions.length === 0) {
//     return window.location.assign("./categories.ejs");
//   }
//   const questionIndex = Math.floor(Math.random() * availableQuestions.length);
//   currentQuestions = availableQuestions[questionIndex];
//   question.innerText = currentQuestions.question;

//   answers.forEach((choice) => {
//     const number = choice.dataset["number"];
//     choice.innerText = currentQuestions["choice" + number];
//   });

//   availableQuestions.splice(questionIndex, 1);

//   acceptingAnswers = true;
// };
// answers.forEach((choice) => {
//   choice.addEventListener("click", (e) => {
//     if (!acceptingAnswers) return;

//     acceptingAnswers = false;
//     const selectedChoice = e.target;
//     const selectedAnswer = selectedChoice.dataset["number"];
//     getNewQuestion();
//   });
// });

// startRandom();
