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

userNumberEl.addEventListener("change", () => {
    if(userNumberEl.value 
        && userNumberEl.value < minRange 
        || userNumberEl.value > maxRange) {
            tryButtonEl.setAttribute("disabled","")
        } else {
            tryButtonEl.removeAttribute("disabled")
        }
})

newGame()

function tryButtonClicked() {
    
    if(userNumberEl.value) {
        userNumber = userNumberEl.value
        if(userNumber == guessedNumber){
            console.log("You WON")
            const newGameEl = document.createElement("button")
            newGameEl.setAttribute("id", "newGame")
            newGameEl.textContent = "NEW GAME"
            newGameEl.addEventListener("click", newGame())
            document.querySelector("#main_container").append(newGameEl)
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
    guessedNumber = generateNumber(minRange, maxRange)
    userAttemptsCount = 10
    attemptsEl.textContent += userAttemptsCount
    minRangeEl.setAttribute("value", minRange)
    maxRangeEl.setAttribute("value", maxRange)
    tryButtonEl.addEventListener('click', tryButtonClicked)
    tryButtonEl.setAttribute("disabled","false")
    userNumberEl.setAttribute("value", "")
}

function renderBody() {
    
}