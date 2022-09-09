const firstText = "Anonymous";
const nameInputRef = document.querySelector("#name-input");
console.log(nameInputRef);
const nameOutputRef = document.querySelector("#name-output");
console.log(nameOutputRef);
nameInputRef.addEventListener("input", (event) => {
  nameOutputRef.textContent =
    event.currentTarget.value === "" ? firstText : event.currentTarget.value;
});
