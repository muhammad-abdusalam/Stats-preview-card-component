// Catch elements
const numbersSpan = document.querySelectorAll(".stats ul li:first-child .num");
const statsCard = document.querySelector("article.card");

// Variables
let numbersArray = Array.from(numbersSpan);
let counterStarted = false;

// ##Events
window.onload = function () {
  // Show Card
  statsCard.classList.add("show");
};

// On Desktop Devices
if (window.navigator.maxTouchPoints === 0) {
  numbersArray.forEach((num) => counter(num));
}
// On Touch Devices
if (window.navigator.maxTouchPoints > 0) {
  window.onscroll = function () {
    if (scrollY > 50) {
      numbersArray.forEach((num) => counter(num));
    }
  };
}

// ##Functions
function counter(num) {
  let goal = +num.dataset.number;
  if (!counterStarted) {
    let counter = setInterval(function () {
      counterStarted = true;
      num.innerHTML++;
      if (+num.innerHTML === goal) {
        clearInterval(counter);
      }
    }, 1800 / goal);
  }
}
