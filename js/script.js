const result = document.getElementById("result");
const scoreEl = document.getElementById("score");
const operator = document.getElementById("oper");
const num1 = document.getElementById("num1");
const wrong = document.getElementById("wrong");
const right = document.getElementById("right");
const num2 = document.getElementById("num2");
const time = document.getElementById("time");
const status = document.getElementById("status");
const scoreBox = document.getElementById("scoreBox");
const again = document.getElementById("again");
const questionArea = document.getElementById("question");
const equal = document.getElementById("equal");
const progress = document.getElementById("progress");
const op = ["+", "-", "×"];
let progressPer = 100,
  rand,
  randDif,
  randOper,
  answer,
  randNum1,
  randNum2,
  score = 0,
  count = 60,
  clickCount = 0;
let progBar = setInterval(progr, 300);
let timeBar = setInterval(timer, 1000);
right.addEventListener("click", () => {
  console.log("Right1", rand);
  checkAnswer(1);
  ifClickRandomly();
});
wrong.addEventListener("click", () => {
  console.log("Left0", rand);
  checkAnswer(0);
  ifClickRandomly();
});
newgame();
function ifClickRandomly() {
  clickCount++;
  let timeDif = 60 - count;
  if (clickCount / timeDif > 1.4 && timeDif > 3) {
    endScreen("You have clicked randomly", "#ff4444");
  }
}
function randAnsNum() {
  return Math.floor(Math.random() * 2);
}
function newgame() {
  answer;
  randNum1 = Math.floor(Math.random() * 100) + 1;
  randNum2 = Math.floor(Math.random() * 100) + 1;
  randOper = Math.floor(Math.random() * 3);
  ranDif = Math.floor(Math.random() * 10) - 10;
  rand = randAnsNum();
  operator.innerHTML = op[randOper];
  if (randOper == 0) {
    answer = randNum1 + randNum2;
  } else if (randOper == 1) {
    answer = randNum1 - randNum2;
  } else if (randOper == 2) {
    answer = randNum1 * randNum2;
  }
  let randAnswer = [answer - ranDif, answer];
  equal.innerHTML = randAnswer[rand];
  num1.innerHTML = randNum1;
  num2.innerHTML = randNum2;
}

function checkAnswer(n) {
  if (rand == n) {
    result.innerHTML = "Correct, below the new quiz";
    result.style.color = "#00C851";
    score++;
    scoreEl.innerHTML = score;
    if (score == 20) {
      endScreen("You Win!", "#00C851");
    }
  } else {
    result.innerHTML = "Wrong, Try again";
    result.style.color = "#ff4444";
  }
  newgame();
}
function endScreen(string, color) {
  questionArea.style.display = "none";
  status.style.display = "block";
  status.innerHTML = string;
  right.style.display = "none";
  wrong.style.display = "none";
  status.style.color = color;
  scoreBox.innerHTML = "Your score is " + score;
  again.style.display = "block";
  clearInterval(progBar);
  clearInterval(timeBar);
}
function progr() {
  progressPer -= 0.5;
  progress.style.width = progressPer + "%";
  if (progressPer == 0) {
    clearInterval(progBar);
  }
}
function timer() {
  count--;
  time.innerHTML = count;
  if (count == 0) {
    clearInterval(timeBar);
    endScreen("You Lost!", "#ff4444");
  } else if (count == 10) {
    result.innerHTML = "Attention!";
    result.style.color = "#ffbb33";
  }
}
