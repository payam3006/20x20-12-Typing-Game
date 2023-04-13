q = console.log;

let answer = "";
const totalTime = 20;
const easeLevel = 2;
let time = totalTime;
let score = 0;

const words = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipisicing",
  "elit",
  "voluptatibus",
  "maiores",
  "ullam",
  "eius",
  "nesciunt",
  "dolorum",
  "doloribus",
  "harum",
  "facilis",
  "iste",
  "quod",
  "impedit",
  "incidunt",
  "qui",
  "eaque",
  "beatae",
  "error",
  "doloribus",
  "voluptatibus",
  "iusto",
  "unde",
  "quibusdam",
];

const answerElem = document.getElementById("answer");
const difficultyElem = document.getElementById("select");
const difficultyMenu = document.getElementById("difficulty");
const timeLeftElem = document.getElementById("timeLeft");
const gameBox = document.getElementById("gameBox");
const endBox = document.getElementById("endBox");
const scoreElem = document.getElementById("score");
const finalScoreElem = document.getElementById("finalScore");
const input = document.getElementById("text");

function toggleDifficulty() {
  difficultyMenu.classList.toggle("hidden");
}

function wordSelet() {
  return words[Math.floor(Math.random() * words.length)];
}

function setAnswer() {
  answer = wordSelet();
  answerElem.innerText = answer;
}

function addTime() {
  if (difficultyElem.value == "Easy") {
    time += 5 * easeLevel;
  } else {
    if (difficultyElem.value == "Medium") {
      time += 3 * easeLevel;
    } else {
      time += 2 * easeLevel;
    }
  }
}

function setTime() {
  timeLeftElem.innerText = `Time left: ${time}s`;
}

function setScore() {
  scoreElem.innerText = `Score: ${score}`;
}

//////////////check timeOut//////////////////
setInterval(function () {
  if (time == 0) {
    gameBox.style.display = "none";
    finalScoreElem.innerText = `your final score is ${score}`;
    endBox.style.display = "flex";
  } else {
    time -= 1;
    setTime();
    setScore();
  }
}, 1000);

////////////reload Game/////////////////////
function reloadGame() {
  time = totalTime;
  score = 0;
  input.value = "";
  setAnswer();
  setTime();
  setScore();
  endBox.style.display = "none";
  gameBox.style.display = "flex";
}

////////////////check Answer///////////////
function checkAnswer() {
  if (input.value == answer) {
    addTime();
    input.value = "";
    setAnswer();
    score += 1;
  }
}
input.addEventListener("input", checkAnswer);

setAnswer();
setTime();
setScore();
