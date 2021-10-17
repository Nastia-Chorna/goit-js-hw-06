
const fontCheck = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const handleUp = () => {
    text.style.fontSize = fontCheck.value + "px";
};
fontCheck.addEventListener("input", handleUp);
