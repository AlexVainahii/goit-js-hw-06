const categoriesMainRef = document.querySelector("#categories");
const categoriesRef = categoriesMainRef.querySelectorAll("ul");
console.log(categoriesMainRef.Value);
console.log("Number of categories:", categoriesRef.length);
categoriesRef.forEach((categorie) => {
  console.log(categorie);
});
