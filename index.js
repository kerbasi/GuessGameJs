let userAttemptsCount = 10;
let minRange = 0;
let maxRange = 10;
let userNumber;

const minRangeEl = document.getElementById("minRange");
const maxRangeEl = document.getElementById("maxRange");
const userNumberEl = document.getElementById("userNumber");
const attemptsEl = document.querySelector("#user_attempts");

minRangeEl.setAttribute("value", minRange);
maxRangeEl.setAttribute("value", maxRange);
attemptsEl.textContent += userAttemptsCount;

if (userNumberEl.value) {
    console.log("Got it")
} else {
    console.log("There is no number")
}
