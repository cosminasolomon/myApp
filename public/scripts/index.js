// // FRONT END FILE TO INTERACT WITH THE DOM
// import { questionPolitics } from "./questions.js";

// questionPolitics();
// // Categories
// let randomBtn = document.getElementById("random");
// let geographyBtn = document.getElementById("geography");
// let historyBtn = document.getElementById("history");
// let politicsBtn = document.getElementById("politics");
// let question = document.getElementById("question");

// // Questions
// // const question = document.getElementById("question");
// // const answers = Array.from(document.getElementsByClassName("btn-answer"));
// // let currentQuestions = {};
// // let availableQuestions = [];
// // let questions = []; // the questions from the fetched api

// // startRandom = () => {
// //   availableQuestions = [...questions];
// //   getNewQuestion();
// // };
// // getNewQuestion = () => {
// //   const questionIndex = Math.floor(Math.random() * availableQuestions.length);
// //   currentQuestions = availableQuestions[questionIndex];
// //   questions.innerText = currentQuestions.question;

// //   answers.forEach((choice) => {
// //     const number = choice.dataset["number"];
// //     choice.innerText = currentQuestions["choice" + number];
// //   });
// // };
// // startRandom();

// // const addQuestion = (question) => {
// //   fetch("/questions.ejs", {
// //     method: "POST", // or 'PUT'
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //     body: JSON.stringify(question),
// //   })
// //     .then((response) => response.json())
// //     .then((data) => {
// //       console.log("Success:", data);
// //     })

// //     .catch((error) => {
// //       console.error("Error:", error);
// //     });
// // };
// // addQuestion();

// // randomBtn.addEventListener("click", (event) => {
// //   alert("ima wrok");
// //   fetch(`https://opentdb.com/api.php?amount=10`)
// //     .then((response) => response.json())

// //     .then((loadedQuestion) => {
// //       console.log(loadedQuestion.results);
// //       questions = loadedQuestion;
// //       loadedQuestion.results.map((loadedQuestion) => {
// //         const formattedQuestion = {
// //           question: loadedQuestion.questions,
// //         };
// //         const answerChoices = [...loadedQuestion.incorrect_answers];
// //         formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
// //         answerChoices.splice(
// //           formattedQuestion.answer - 1,
// //           0,
// //           loadedQuestion.correct_answer
// //         );
// //         answerChoices.forEach((choice, index) => {
// //           formattedQuestion["choice" + (index + 1)] + choice;
// //         });
// //         return formattedQuestion;
// //       });
// //       // addQuestion();
// //       // .catch((error) => {
// //       //   console.error("Error:", error);
// //       // };
// //     });
// // });

// // geographyBtn.addEventListener("click", (event) => {
// //   alert("ima wrok");
// //   fetch(`https://opentdb.com/api.php?amount=10&category=22&difficulty=easy`)
// //     .then((response) => response.json())
// //     .then((loadedQuestions) => {
// //       console.log(loadedQuestions);
// //     })
// //     .catch((error) => {
// //       console.error("Error:", error);
// //     });
// // });

// const newQuestion = (question) => {
//   fetch("/api/", {
//     method: "POST", // or 'PUT'
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(question),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Success:", data);
//       window.location.replace("./questions.ejs");
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };

// const apiHistory = () => {
//   alert("ima wrok");
//   fetch(`https://opentdb.com/api.php?amount=10&category=23&difficulty=easy`)
//     .then((response) => response.json())
//     .then((loadedQuestions) => {
//       console.log(loadedQuestions);
//     })

//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };

// const newQ = () => {
//   alert("ima wrok");
//   fetch(`https://opentdb.com/api.php?amount=10&category=24&type=multiple`)
//     .then((response) => response.json())
//     .then((loadedQuestions) => {
//       console.log(loadedQuestions);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });

//   newQuestion();
// };

// historyBtn.addEventListener("click", newQ);
// // question.addEventListener("load", newQ);

// // politicsBtn.addEventListener("click", (event) => {
// //   alert("ima wrok");
// //   fetch(`https://opentdb.com/api.php?amount=10&category=24&type=multiple`)
// //     .then((response) => response.json())
// //     .then((loadedQuestions) => {
// //       console.log(loadedQuestions);
// //     })
// //     .catch((error) => {
// //       console.error("Error:", error);
// //     });
// // });
// politicsBtn.addEventListener("click", questionPolitics);
