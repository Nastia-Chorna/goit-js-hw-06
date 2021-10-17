const button = {
    countDown: document.querySelector("[data-action='decrement']"),
    countUp: document.querySelector("[data-action='increment']"),
    span: document.querySelector('.value'),
    counter: document.querySelector('.counter'),
};

let counterValue = 0;
const increment = () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
};

button.countUp.addEventListener('click', increment);
button.countDown.addEventListener('click', decrement)
