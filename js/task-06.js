const inputText = document.querySelector("#validation-input");
inputText.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === 6) {
    inputText.classList.remove("invalid");
    inputText.classList.add("valid");
  } else {
    inputText.classList.remove("valid");
    inputText.classList.add("invalid");
  }
});
