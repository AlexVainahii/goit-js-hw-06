let counterValue = 0;
const counter = document.querySelector("#value");
const buttonInc = document.querySelector("*[data-action=increment]");
console.log(buttonInc);
const buttonDec = document.querySelector("*[data-action=decrement]");
console.log(buttonDec);

buttonInc.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
buttonDec.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});
