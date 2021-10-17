
let inputValid = document.getElementById("validation-input");

let length = inputValid.getAttribute("data-length");
let inLength = parseInt(length, 6);

inputValid.onInput = function () {
    if (inputValid.value.length === inLength) {
        inputValid.classList.add("valid");
        inputValid.classList.remove("invalid");
    }
    if (inputValid.value.length === 0) {
        inputValid.classList.remove("valid");
        inputValid.classList.remove("invalid");
    }
    if (inputValid.value.length !== inLength && inputValid.value.length !== 0) {
        inputValid.classList.add("invalid")
    }
};
