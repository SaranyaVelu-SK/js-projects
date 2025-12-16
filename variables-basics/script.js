const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const resetBtn = document.getElementById("reset");
const result = document.getElementById("result");
const error = document.getElementById("error");

const operation = (operator) => {
    error.textContent = "";
    result.textContent = "";
    //to check for empty inputs
    if (input1.value == "" || input2.value == "") {
        error.textContent = "Inputs can't be empty";
        return;
    }
    //to check for strings

    const num1 = Number(input1.value);
    const num2 = Number(input2.value);
    if (isNaN(num1) || isNaN(num2)) {
        error.textContent = "Enter valid numbers";
        return;
    }

    //check for division by zero
    if (operator == "divide" && num2 == 0) {
        error.textContent = "Invalid division by zero";
        return;
    }

    //operations

    let ans;

    switch (operator) {
        case "add":
            ans = num1 + num2;
            break;
        case "subtract":
            ans = num1 - num2;
            break;
        case "multiply":
            ans = num1 * num2;
            break;
        case "divide":
            ans = num1 / num2;
            break;
    }

    result.textContent = ans;
}
addBtn.addEventListener("click", () => operation("add"))
subtractBtn.addEventListener("click", () => operation("subtract"))
multiplyBtn.addEventListener("click", () => operation("multiply"))
divideBtn.addEventListener("click", () => operation("divide"));
resetBtn.addEventListener("click", () => {
    error.textContent = "";
    result.textContent = "";
    input1.value = "";
    input2.value = "";
})
