const inpValues = document.getElementById("inpValues");

//error element;
const error = document.getElementById("error");

//operators
let state ={
    input1:null,
    input2:null,
    operator:null
}

const equalsBtn = document.getElementById("equalsBtn");
const ans = document.getElementById('ans');
const resetBtn = document.getElementById("resetBtn");
const operatorButtons = document.querySelectorAll(".operators button");
function disableButtons() {
    operatorButtons.forEach(btn => {
        btn.disabled = true;
    });
    console.log("disabled")
}

function enableButtons() {
    operatorButtons.forEach(btn => {
        btn.disabled = false;
    });
}

//calculate function
function calculate(inp1, inp2, operator) {
    if (operator == '+') {
        return inp1 + inp2;
    }
    if (operator == '-') {
        return inp1 - inp2;
    }
    if (operator == '*') {
        return inp1 * inp2
    }
    if (operator == '/' && inp2 != 0) {
        return inp1 / inp2;
    } else {
        error.textContent = "not divisible by zero";
    }
}

function getOutput() {
    if (state.input1 !== undefined && inpValues.value!=="") {
        state.input2 = inpValues.value;
        inpValues.value = "";
        let output = calculate(Number(state.input1), Number(state.input2), state.operator);
        ans.textContent = output;
        state.input1 = null;
        state.input2 = null;
        enableButtons();
    } else {
        error.textContent = "Enter another number to calculate";
    }
}

// function to append input values
function appendInpValues(value) {
    inpValues.value += value;
    console.log(inpValues.value)
}

//adding eventlistener to the parent for event delegation
document.querySelector(".keypad").addEventListener("click", (e) => {
    error.textContent = "";
    if (e.target.tagName == "BUTTON") {
        appendInpValues(e.target.dataset.value);
    }
})

//access to keyboard numbers
document.addEventListener("keydown", (e) => {
    error.textContent = "";
    if (e.key >= "0" && e.key <= "9") {                  //string comparison only gives true for single digit numbers
        appendInpValues(e.key)
    }
    if (e.key === "Backspace") {
        inpValues.value = inpValues.value.slice(0, -1);
    }

    if (e.key === "Enter") {
        getOutput();
    }
    if ("+-*/".includes(e.key)) {
   state.operator = e.key;
   operatorClick();
}
})
function operatorClick(){
    if( inpValues.value !== null && !state.input1){
        ans.textContent = "";
        state.input1 = inpValues.value;
        inpValues.value = "";
        disableButtons();
    }
}
document.querySelector(".operators").addEventListener("click", (e) => {            //event delegation
    if (e.target.tagName == "BUTTON") {        
        state.operator = e.target.dataset.op;
        operatorClick();
    } else {
        error.textContent = "Enter a number to calculate";
    }

})

equalsBtn.addEventListener("click", () => {
    getOutput();
})

resetBtn.addEventListener("click", (e) => {
    inpValues.value = "";
    error.textContent = "";
    ans.textContent = "";
    state.input1 = null;
    state.input2 = null;
    state.operator=null;
    
})