
const inputValid = document.querySelector('#validation-input');
const validNumber = parseInt(inputValid.dataset.length);

const sumpolInput = (event) => {
    const userRequest = event.target.value.trim().length;
    console.log(userRequest);

    if (userRequest !== validNumber) {
        inputValid.classList.add('invalid');
        inputValid.classList.remove('valid');
        return;
    }
        inputValid.classList.add('valid');
        inputValid.classList.remove('invalid');
    
};
inputValid.addEventListener("blur", sumpolInput);