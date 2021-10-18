
let inputValid = document.getElementById("validation-input");

const sumpolInput = (event) => {
    if (event.currentTarget.value.length === 6) {
        event.currentTarget.classList.add("valid");
        event.currentTarget.classList.replace("valid", "invalid");
    }
    else {
        event.currentTarget.classList.add("invalid");
        event.currentTarget.classList.replace("valid", "invalid");
    }
};
inputValid.addEventListener("blur", sumpolInput);