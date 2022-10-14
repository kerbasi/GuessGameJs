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
const userInputDivEl = document.querySelector("#user_input") 
const showSettingsBtn = document.getElementById("settings");
const settingSectionEl = document.getElementById("settings_section");
const descriptionEl = document.getElementById("description")
let isGameRunning = false;
settingSectionEl.style.display = "none";
userInputDivEl.style.display = "none"
const descriptionText =  
    `We have selected a random number between ${minRange} and ${maxRange}. 
    See if you can guess it in ${attempts} turns or fewer. 
    We'll tell you if your guess was too high or too low.`
descriptionEl.textContent = descriptionText;
minRangeEl.value = minRange;
maxRangeEl.value = maxRange;
attemptsEl.value = attempts;
tryButtonEl.addEventListener("click", newGame);

userNumberEl.addEventListener("change", () => {
    if(!isGameRunning){
        return
    }
    if (userNumberEl.value < minRange || userNumberEl.value > maxRange){
        tryButtonEl.setAttribute("disabled", "");
        tryButtonEl.textContent = "Please type a number in the given range"
    } else {        
        tryButtonEl.removeAttribute("disabled");
        tryButtonEl.textContent = "Check you number"
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

function tryButtonClicked() {
    userAttemptsCount--;
    triesCounter++;
    let text;
    if (userNumberEl.value) {
        userNumber = userNumberEl.value;
        if (userNumber == guessedNumber) {
            text = "You WON";
            userInputDivEl.style.display = "none"
            tryButtonEl.removeAttribute("disabled");
            tryButtonEl.textContent = "START NEW GAME"
            tryButtonEl.removeEventListener("click", tryButtonClicked);
            tryButtonEl.addEventListener("click", newGame);
            isGameRunning = false;
            userNumberEl.value = "";
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


function generateNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function newGame() {
    userInputDivEl.style.display = ""
    tryButtonEl.removeEventListener("click", newGame)
    tryButtonEl.addEventListener("click", tryButtonClicked);
    tryButtonEl.textContent = "Please type a number in the given range"
    guessedNumber = generateNumber(minRange, maxRange);
    setValues();
    isGameRunning = true;
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
    descriptionEl.textContent = descriptionText;
}
