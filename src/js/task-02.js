const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (let i of ingredients){
  const createList = document.createElement("li");
  createList.textContent = i;
  createList.classList.add("item");

  const appendListToUl = document.body.firstElementChild.nextElementSibling;
  appendListToUl.append(createList);
  console.log(appendListToUl);
}