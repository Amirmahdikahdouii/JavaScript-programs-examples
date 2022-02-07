// Add class .number to the number buttons
// Add class .operaator to the operators buttons
// Add Id #current for showing Current Result to the User
// Add Id #current for showing previous Result to the User
// Id #equal for (=) for taking results
// And At the End Add #AC for clearing and #DEL for delete last number or operation
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let current_monitor = document.getElementById("current");
let previous_monitor = document.getElementById("previous");
let equal = document.getElementById("equal");
let AC = document.getElementById("AC");
let DEL = document.getElementById("DEL");
let num_1 = "", operation, num_2 = "", dot_clicked = 0;


AC.addEventListener("click", () => {
    num_1 = "";
    num_2 = "";
    operation = null;
    dot_clicked = 0;
    current_monitor.innerText = "";
    previous_monitor.innerText = "";
})


numbers.forEach(function (number) {
    number.addEventListener("click", function () {
        if (operation == null) {
            if (number.textContent === "." && dot_clicked === 0) {
                dot_clicked++;
                num_1 += number.textContent;
                current_monitor.innerText = `${num_1}`;
            } else if (number.textContent === "." && dot_clicked !== 0) {
            } else {
                num_1 += number.textContent;
                current_monitor.innerText = `${num_1}`;
            }
        } else {
            if (number.textContent === "." && dot_clicked === 0) {
                dot_clicked++;
                num_2 += number.textContent;
                current_monitor.innerText += `${number.textContent}`;
            } else if (number.textContent === "." && dot_clicked !== 0) {
            } else {
                num_2 += number.textContent;
                current_monitor.innerText += `${number.textContent}`;
            }
        }
    })
})


operators.forEach(function (opt) {
    opt.addEventListener("click", function () {
        if (num_1 !== "" && operation == null) {
            operation = opt.textContent;
            console.log(operation);
            current_monitor.innerText += ` ${operation}`;
            dot_clicked = 0;
        }
    })
})


equal.addEventListener("click", function () {
    let firstNum = parseFloat(num_1);
    let secondNum = parseFloat(num_2);
    let operator = operation;
    let answer;
    num_2 = "";
    operation = null;
    dot_clicked = 0;
    if (operator === "*") {
        answer = firstNum * secondNum;
        previous_monitor.innerText = `${firstNum} * ${secondNum}`;
        current_monitor.innerText = `${answer}`;
    } else if (operator === "/") {
        answer = firstNum / secondNum;
        previous_monitor.innerText = `${firstNum} / ${secondNum}`;
        current_monitor.innerText = `${answer}`;
    } else if (operator === "+") {
        answer = firstNum + secondNum;
        previous_monitor.innerText = `${firstNum} + ${secondNum}`;
        current_monitor.innerText = `${answer}`;
    } else if (operator === "-") {
        answer = firstNum - secondNum;
        previous_monitor.innerText = `${firstNum} - ${secondNum}`;
        current_monitor.innerText = `${answer}`;
    }
    num_1 = answer;
})


DEL.addEventListener("click", () => {
    if ((num_1 !== "" && num_2 === "") && operation == null) {
        num_1 = "";
        current_monitor.innerText = "";
    } else if (num_1 !== "" && num_2 !== "") {
        num_2 = "";
        current_monitor.innerText = `${num_1} ${operation}`;
    } else if (num_1 !== "" && operation != null) {
        operation = null;
        current_monitor.innerText = `${num_1} `;
    }
})
