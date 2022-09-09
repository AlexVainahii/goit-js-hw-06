function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const mainDiv = document.querySelector("div#boxes");
const inputCount = document.querySelector("input[type=number]");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
buttonCreate.addEventListener("click", () => {
  createBoxes(inputCount.value);
});
function createBoxes(amount) {
  let startSize = 30;
  let markup = "";
  for (let i = 1; i <= amount; i += 1) {
    markup =
      markup +
      `<div style="width: ${startSize}px; height: ${startSize}px; background-color: ${getRandomHexColor()}"></div> `;
    startSize += 10;
  }
  mainDiv.innerHTML = markup;
}
buttonDestroy.addEventListener("click", () => {
  mainDiv.innerHTML = "";
});
