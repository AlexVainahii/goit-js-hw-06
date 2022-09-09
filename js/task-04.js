let counterValue = 0;
const counter = document.querySelector("#value");
const buttonInc = document.querySelector('button[data-action="increment"]');
const buttonDec = document.querySelector('button[data-action="decrement"]');
buttonInc.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
buttonDec.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});
