//References
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let level1Button = document.getElementById("level-1");
let level1aButton = document.getElementById("level-1a");
let level1bButton = document.getElementById("level-1b");
let level2Button = document.getElementById("level-two");
let level3Button = document.getElementById("level-three");
let level4Button = document.getElementById("level-four");
let level5Button = document.getElementById("level-five");
let level6Button = document.getElementById("level-six");
let level7Button = document.getElementById("level-seven");
let level9Button = document.getElementById("level-nine");
let level10Button = document.getElementById("level-ten");
let homeButton = document.getElementById("home");
let questionCount;
let scoreCount = 0;
let count = 11;
let beatcorrect = new Audio('duolingo-correct.mp3');
let beatwrong = new Audio('duolingo-wrong.mp3');
let currentlevel = quizArray_level1;

//Return to start screen on load
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};

//randomly sort questions in large levels
quizArray_level10.sort(() => Math.random() - 0.5);

//Restart Quiz
restart.addEventListener("click", () => {
  initial(currentlevel);
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Return home
homeButton.addEventListener("click", () => {
  window.location.href="./index.html"
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      const result = Math.round((scoreCount / questionCount) * 100)
      if (result >= 40) {
        userScore.innerHTML =
          "Congratulations! <br>You got " + result + "% correct<br> " + scoreCount + " out of " + questionCount + "<br>Keep it up!";
      }
      else {
        userScore.innerHTML =
          "Good attempt!<br>You got " + result + "% correct<br> " + scoreCount + " out of " + questionCount + "<br>Keep trying!";
      }
    } else {
      //display questionCount
      let displayquestioncount = questionCount + 1
      countOfQuestion.innerHTML =
        "Question " + displayquestioncount + " of " + quizArray.length;
      //display quiz
      quizDisplay(questionCount);
      count = 11;
    }
  })
);

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator(chosen_quiz_array) {
  // pick 10 questions out of 1000 (10 letters per vowel)
  let numberofquestions = 5;
  let maxarraylength = chosen_quiz_array.length - numberofquestions - 1;
  let startnumber = Math.floor(Math.random() * maxarraylength);
  let stopnumber = startnumber + numberofquestions;

  quizArray = chosen_quiz_array.map((x) => x).slice(startnumber,stopnumber);

  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);

  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = "Question " + 1 + " of " + quizArray.length;
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question+'<br><audio controls src="'+i.audio_url+'"></audio>';
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <div class="options">
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    </div>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
    var click=beatcorrect.cloneNode();
    click.play();

  } else {
    userOption.classList.add("incorrect");
    var click=beatwrong.cloneNode();
    click.play();

    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}


//initial setup
function initial(chosen_level) {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  quizCreator(chosen_level);
  quizDisplay(questionCount);
}

//when user click on Level 1 button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  currentlevel = quizArray_level1;
  initial(currentlevel);
});

//when user click on Level 1 button
level1Button.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  currentlevel = quizArray_level1;
  initial(currentlevel);
});

//when user click on Level 2 button
level1aButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  currentlevel = quizArray_level1a;
  initial(currentlevel);
});

//when user click on Level 2 button
level1bButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  currentlevel = quizArray_level1b;
  initial(currentlevel);
});

//when user click on Level 2 button
level2Button.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  currentlevel = quizArray_level2;
  initial(currentlevel);
});

//when user click on Level 3 button
level3Button.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  currentlevel = quizArray_level3;
  initial(currentlevel);
});

//when user click on Level 4 button
level4Button.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  currentlevel = quizArray_level4;
  initial(currentlevel);
});

//when user click on Level 5 button
level5Button.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  currentlevel = quizArray_level5;
  initial(currentlevel);
});

//when user click on Level 6 button
level6Button.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  currentlevel = quizArray_level6;
  initial(currentlevel);
});

//when user click on Level 7 button
level7Button.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  currentlevel = quizArray_level7;
  initial(currentlevel);
});

//when user click on Level 8 button
level9Button.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  currentlevel = quizArray_level9;
  initial(currentlevel);
});

//when user click on Level 8 button
level10Button.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  currentlevel = quizArray_level10;
  initial(currentlevel);
});
