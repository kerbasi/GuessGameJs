let attempts = 10;
let userAttemptsCount;
let triesCounter = 0;
let minRange = 0;
let maxRange = 10;
let userNumber;
let guessedNumber;
const gameTextEl = document.getElementById("game_text");
const minRangeEl = document.getElementById("minRange");
const maxRangeEl = document.getElementById("maxRange");
const userNumberEl = document.getElementById("userNumber");
const tryButtonEl = document.querySelector("#try_button");
const attemptsEl = document.querySelector("#attempts");
const newGameEl = document.querySelector("#new_game");
const showSettingsBtn = document.getElementById("settings");
const settingSectionEl = document.getElementById("settings_section");
tryButtonEl.setAttribute("disabled", "");
let isGameRunning = false;
settingSectionEl.style.display = "none";

tryButtonEl.addEventListener("click", tryButtonClicked);

userNumberEl.addEventListener("change", () => {
    if (
        isGameRunning &&
        userNumberEl.value &&
        (userNumberEl.value < minRange || userNumberEl.value > maxRange)
    ) {
        tryButtonEl.setAttribute("disabled", "");
    } else {
        tryButtonEl.removeAttribute("disabled");
    }
});

showSettingsBtn.addEventListener("click", () => {
    if (settingSectionEl.style.display !== "none") {
        settingSectionEl.style.display = "none";
        showSettingsBtn.textContent = "Show Settings"
    } else {
        settingSectionEl.style.display = "";
        showSettingsBtn.textContent = "Hide Settings"
    }
});

newGameMenuActivate();

function tryButtonClicked() {
    userAttemptsCount--;
    triesCounter++;
    let text;
    if (userNumberEl.value) {
        userNumber = userNumberEl.value;
        if (userNumber == guessedNumber) {
            text = "You WON";
            newGameMenuActivate();
            isGameRunning = false;
            userNumberEl.value = "";
            tryButtonEl.setAttribute("disabled", "");
        } else if (userNumber > guessedNumber) {
            text = "It's too big";
        } else {
            text = "It's too small";
        }
    } else {
        text = "Please pick a number";
    }
    gameTextEl.innerHTML = `
        <h2>${text}</h2>
        ${
            isGameRunning
                ? `<h3>You've got ${userAttemptsCount} attempts!</h3>`
                : `<h3>You guessed it by ${triesCounter} times</h3>`
        }`;
}

function newGameMenuActivate() {
    newGameEl.addEventListener("click", newGame);
    newGameEl.classList.remove("disabled");
}

function generateNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function newGame() {
    guessedNumber = generateNumber(minRange, maxRange);
    setValues();
    isGameRunning = true;
    newGameEl.classList.add("disabled");
    newGameEl.removeEventListener("click", newGame);
}

function setValues() {
    userAttemptsCount = attempts;
    minRangeEl.setAttribute("value", minRange);
    maxRangeEl.setAttribute("value", maxRange);
    attemptsEl.value = attempts;
    tryButtonEl.setAttribute("disabled", "");
    userNumberEl.value = "";
    gameTextEl.innerHTML = `
    <h2>Please choose a number between ${minRange} and ${maxRange}</h2>
    <h3>You've got ${userAttemptsCount} attempts!</h3>
    `;
}
