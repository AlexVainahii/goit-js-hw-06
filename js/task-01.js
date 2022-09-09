const categoriesMain = document.querySelector("#categories");
const categories = categoriesMain.querySelectorAll("ul");
console.log("Number of categories:", categories.length);
const categoriesList = categoriesMain.querySelectorAll("li.item");
categoriesList.forEach((element) => {
  console.log("Category:", element.querySelector("h2").textContent);
  console.log("Elements:", element.querySelector("ul").children.length);
});
