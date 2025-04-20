console.log("Guess the number");

// -------------------------------------------------------
// Creating random number
let secretNumber = Math.trunc(Math.random() * 20 + 1);

// Score value .
let score = 20;
document.querySelector(".score").textContent = score;

// Highscore
let highscore = 0;

// Main logic

document.querySelector(".check").addEventListener("click", function () {
  // Guess number is passed for comparing.

  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // When guess is zero or negative
  //
  if (guess <= 0) {
    document.querySelector(".guessing").textContent = "❌ Wrong Input ...";
    score--;
    document.querySelector(".score").textContent = score;
  }

  // When guess is higher
  //
  else if (guess > secretNumber) {
    //
    if (score > 1) {
      document.querySelector(".guessing").textContent = " High Value ";
      score--;
      document.querySelector(".score").textContent = score;
    }
    //
    else {
      document.querySelector(".guessing").textContent = " 😭You Lost The Game";
    }
  }

  // When guess is low
  //
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".guessing").textContent = " Low Value";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".guessing").textContent = "😭You Lost The Game";
    }
  }
  // When guess is equal to secret number
  else if (guess === secretNumber) {
    document.querySelector(".guessing").textContent = " 🎉You Won The Game .";
    document.querySelector(".highscore").textContent = score;
    document.querySelector("Body").style.backgroundColor =
      "rgb(94, 255, 45,0.9)";
    document.querySelector(".number").style.width = "270px";
    document.querySelector(".number").style.height = "112px";
    document.querySelector(".number").style.backgroundColor = "#892DE1";
    document.querySelector(".score").style.backgroundColor = "#892DE1";
    document.querySelector(".number").textContent = secretNumber;
  }
});
//
// -----------------------------------------
// Again button logic
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  highscore = score;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = " ";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guessing").textContent = "Start guessing..";
  document.querySelector(".again").style.backgroundColor = "rgb(128, 0, 255)";
  document.querySelector(".again").style.filter =
    "drop-shadow(1px 1px 4px rgba(125,125,125,0.8)";
});

// hover on again button
const btn = document.querySelector(".again");
btn.addEventListener("mouseenter", function () {
  btn.style.width = "239px";
  btn.style.backgroundColor = "rgb(203, 152, 255)";
  button.style.filter = "drop-shadow(2px 2px 4px rgb(128, 0, 255,0.8)";
});

btn.addEventListener("mouseleave", function () {
  btn.style.width = "238px";
  btn.style.backgroundColor = "rgb(255, 255, 255)";
  button.style.filter = "drop-shadow(2px 2px 4px rgb(128, 0, 255,0.8)";
});

// hover on check button
const button = document.querySelector(".check");
button.addEventListener("mouseenter", function () {
  button.style.width = "162px";
  button.style.filter = "drop-shadow(2px 2px 4px rgb(128, 0, 255,0.8)";
  button.style.backgroundColor = "rgb(203, 152, 255)";
});
button.addEventListener("mouseleave", function () {
  button.style.width = "160px";
  button.style.filter = "drop-shadow(2px 2px 4px rgb(128, 0, 255,0.8)";
  button.style.backgroundColor = "whitesmoke";
});
