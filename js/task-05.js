
let inputEl = document.querySelector('#name-input');
let outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);
function onInput(event) {
    outputEl.textContent = event.currentTarget.value.trim();
    if (outputEl.textContent === '') {
        outputEl.textContent = "Anonymous";
    }
}

