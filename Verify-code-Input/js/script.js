let numberInputes = [...document.getElementsByClassName('digit-input')];
let submitButton = document.getElementById("submit-button");
let modalContent = document.getElementById("modal-content");
let clearInputsButton = document.getElementById("clear-inputs-button");

numberInputes.forEach((element, index) => {
    element.addEventListener("input", () => {
        if (index + 1 !== numberInputes.length) {
            numberInputes[index + 1].focus();
        }
    })
})

submitButton.addEventListener("click", (e) => {
    let value = "";
    numberInputes.forEach(element => {
        value += element.value;
    })
    if (value.length < 6) {
        modalContent.innerText = "Please Fill The Inputs";
    } else if (value.length > 6) {
        modalContent.innerText = "Only 6 digit is possible";
    } else {
        modalContent.innerText = `Your Code is: ${value}`;
    }
})

clearInputsButton.addEventListener("click", () => {
    numberInputes.forEach(element => {
        element.value = "";
    })
})