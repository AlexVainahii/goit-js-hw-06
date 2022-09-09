const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUlRef=document.querySelector("#ingredients")
const listItem=ingredients.map((ingredient)=>{
  const itemLi=document.createElement("li")
  itemLi.textContent=ingredient;
  itemLi.classList.add("item");
  return itemLi;
})

ingredientsUlRef.append(...listItem);
