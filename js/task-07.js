const inputValue = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

inputValue.addEventListener("input", (event) => {
  console.log(event.currentTarget.value);
  textSpan.style.fontSize = event.currentTarget.value + "px";
});
