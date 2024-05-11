let homeScoreCount = 0;
let guestScoreCount = 0;

const homeScoreDisplay = document.getElementById("scoreHome");
const guestScoreDisplay = document.getElementById("scoreGuest");

function incrHome1() {
  homeScoreCount++;
  homeScoreDisplay.textContent = homeScoreCount;
}

function incrHome2() {
  homeScoreCount += 2;
  homeScoreDisplay.textContent = homeScoreCount;
}

function incrHome3() {
  homeScoreCount += 3;
  homeScoreDisplay.textContent = homeScoreCount;
}

function incrGuest1() {
  guestScoreCount++;
  guestScoreDisplay.textContent = guestScoreCount;
}

function incrGuest2() {
  guestScoreCount += 2;
  guestScoreDisplay.textContent = guestScoreCount;
}

function incrGuest3() {
  guestScoreCount += 3;
  guestScoreDisplay.textContent = guestScoreCount;
}

function playAgain() {
  homeScoreCount = 0;
  guestScoreCount = 0;
  homeScoreDisplay.textContent = homeScoreCount;
  guestScoreDisplay.textContent = guestScoreCount;
  homeScoreDisplay.style.background = "#0a0001";
  guestScoreDisplay.style.background = "#0a0001";
}

function winner() {
  if (homeScoreCount > guestScoreCount) {
    homeScoreDisplay.style.background = "yellow";
  } else if (homeScoreCount === guestScoreCount) {
    homeScoreDisplay.style.background = "#0a0001";
    guestScoreDisplay.style.background = "#0a0001";
  } else {
    guestScoreDisplay.style.background = "yellow";
  }
}
