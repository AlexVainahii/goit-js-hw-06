const categoriesMainRef = document.querySelector("#categories");
const categoriesRef = categoriesMainRef.querySelectorAll("ul");
console.log("Number of categories:", categoriesRef.length);
const categoriesListRef = categoriesMainRef.querySelectorAll("li.item");
categoriesListRef.forEach((element) => {
  console.log("Category:", element.querySelector("h2").textContent);
  console.log("Elements:", element.querySelector("ul").children.length);
});
