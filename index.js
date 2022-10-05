let userAttemptsCount = 0
let minRange = 0
let maxRange = 10
let userNumber
let guessedNumber
const minRangeEl = document.getElementById("minRange")
const maxRangeEl = document.getElementById("maxRange")
const userNumberEl = document.getElementById("userNumber")
const attemptsEl = document.querySelector("#user_attempts")
const tryButtonEl = document.querySelector("#try_button")
const newGameEl = 
userNumber = userNumberEl.value

minRangeEl.setAttribute("value", minRange)
maxRangeEl.setAttribute("value", maxRange)
attemptsEl.textContent += userAttemptsCount
tryButtonEl.addEventListener('click', tryButtonClicked)

function tryButtonClicked() {
    
    if(userNumberEl.value) {
        userNumber = userNumberEl.value
        if(userNumber == guessedNumber){
            console.log("You WON")
        } else if(userNumber > guessedNumber){
            console.log("It's too big")
        } else {
            console.log("It's too small")
        }
    } else {
        console.log("Please pick a number")
    }
}

function generateNumber(min, max){
    return Math.round((Math.random() * (max - min)) + min)
}

function newGame(){
    guessedNumber = generateNumber(maxRange, maxRange)
    userAttemptsCount = 10
}