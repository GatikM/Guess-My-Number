"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highScore = 0;

function triggerConfetti() {
  confetti({
    particleCount: 200, // Number of particles
    spread: 100, // Spread angle
    origin: { y: 1.0 }, // Origin point (vertical position on screen)
  });
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number !";
  } else if (guess === secretNumber) {
    triggerConfetti();
    document.querySelector(".message").textContent = "🎊 Correct Number !";
    document.querySelector(".hiddenNumber").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".hiddenNumber").style.width = "160px";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score <= 1) {
      document.querySelector(
        ".message"
      ).textContent = `💥 You Lost the Game ! The number was ${secretNumber}.`;
      document.querySelector(".hiddenNumber").textContent = secretNumber;
      document.querySelector(".score").textContent = "0";
      document.querySelector("body").style.backgroundColor = "#4c0909ff";
      document.querySelector(".hiddenNumber").style.width = "160px";
    } else {
      document.querySelector(".message").textContent = "📈 Too High !";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score <= 1) {
      document.querySelector(
        ".message"
      ).textContent = `💥 You Lost the Game ! The number was ${secretNumber}`;
      document.querySelector(".hiddenNumber").textContent = secretNumber;
      document.querySelector(".score").textContent = "0";
      document.querySelector("body").style.backgroundColor = "#4c0909ff";
      document.querySelector(".hiddenNumber").style.width = "160px";
    } else {
      document.querySelector(".message").textContent = "📉 Too Low !";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  document.querySelector(".guess").value = "";
  document.querySelector(".hiddenNumber").textContent = "?";
  document.querySelector(".message").textContent = "🤷‍♂️ Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".hiddenNumber").style.width = "80px";
});
