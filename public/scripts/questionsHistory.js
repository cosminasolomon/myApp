// let quizzHistory = document.getElementById("questionsHistory");
// const questionHistory = () => {
//   //   alert("ima wrok");
//   fetch(`https://opentdb.com/api.php?amount=10&category=23&difficulty=easy`)
//     .then((response) => response.json())
//     .then((loadedQuestions) => {
//       console.log(loadedQuestions);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };
// questionHistory();
// quizzHistory.addEventListener("load", questionHistory);
// // historyBtn.addEventListener("click", (event) => {
// //   questionHistory();
// // });
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
    `https://opentdb.com/api.php?amount=50&category=23&type=multiple`
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
  document.getElementById("questionsHistory").innerHTML =
    data.results[0].question;
  let answer1 = document.getElementById("answer1");
  answer1.innerHTML = newArray[0];
  answer1.addEventListener("click", (e) => {
    if (newArray[0] === data.results[0].correct_answer) {
      answer1.style.backgroundColor = "#1bb87e";
      setTimeout(function () {
        window.location.assign("./questionsHistory.ejs");
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
        window.location.assign("./questionsHistory.ejs");
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
        window.location.assign("./questionsHistory.ejs");
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
        window.location.assign("./questionsHistory.ejs");
      }, 700);
    } else {
      answer4.style.backgroundColor = "lightcoral";
    }
  });
}
