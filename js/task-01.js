const countCategories = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${countCategories}`);

const arrayOfCategories = document.querySelectorAll("h2");
const getChild = document.querySelectorAll(".item");

for (let i=0; i<=countCategories; ++i){
    const category = arrayOfCategories[i];
    console.log(`Category: ${category.textContent}`);
    const getElement = getChild[i].querySelectorAll("li").length;
    console.log(`Elements: ${getElement}`);
}