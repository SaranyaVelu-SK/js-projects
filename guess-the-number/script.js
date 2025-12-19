const userInp = document.getElementById("userInput");
const submitBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");
const result = document.getElementById("result");
const error = document.getElementById("error");
const counter = document.getElementById("counter");


let gameState = {
    randomNum: null,
    counter: 0,
    maxAttempt: 10
}

function generateRandomNumber() {
    gameState.randomNum = Math.floor((Math.random() * 100) + 1);
    console.log(gameState.randomNum)
}


generateRandomNumber();


function guessNumber(guessedVal) {
    if (error.textContent !== "") {
        error.textContent = "";
    };

    if (guessedVal > gameState.randomNum) {
        result.textContent = "The value is too high";

    } else if (guessedVal < gameState.randomNum) {
        result.textContent = "The value is too small";

    } else {
        result.textContent = "whoa! you guessed it right 🎉"
        counter.textContent = `you found the answer in ${gameState.counter} attempts`;
        submitBtn.disabled = true;
    }
    if (gameState.counter >= gameState.maxAttempt) {
        error.textContent = `Exceeds the max Limit, you lose !  The secret number is ${gameState.randomNum}`;
        submitBtn.disabled = true;
        result.textContent="";
        return;
    }
}


const validateInput = (inp) => {
    result.textContent = "";
    if (inp === "") {
        error.textContent = "Enter value to guess";
        return false;
    }
    inp = Number(inp);
    if (Number.isNaN(inp)) {
        error.textContent = "Enter numbers to guess, characters not allowed";
        return false;
    }
    if (inp < 1 || inp > 100) {
        error.textContent = "Number id out of range, enter between 1 and 100";
        return false;
    }
    return true;
}


submitBtn.addEventListener("click", (e) => {
    if (validateInput(userInp.value)) {
        console.log(1)
        gameState.counter++;
        guessNumber(Number(userInp.value));
    }

});

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && validateInput(Number(userInp.value))) {
        gameState.counter++;
        guessNumber(Number(userInp.value))
    }
})

resetBtn.addEventListener("click", (e) => {
    result.textContent = "";
    userInp.value = "";
    generateRandomNumber();
    gameState.counter = 0;
    counter.textContent = "";
    submitBtn.disabled = false;
    error.textContent="";
})