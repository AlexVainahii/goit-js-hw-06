function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const elemBody = document.querySelector("body");
const buttonChange = document.querySelector("button.change-color");
const colorSpan = document.querySelector(".color");
buttonChange.addEventListener("click", () => {
  const changeColor = getRandomHexColor();
  elemBody.style.backgroundColor = changeColor;
  colorSpan.textContent = changeColor;
});
