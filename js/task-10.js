function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
let divSize = 30;
let value = 0;

input.addEventListener("input", (event) => {
  value = input.value;
});
  
function createBoxes(amount) {
  for (let i = 1; i <= value; i++) {
    const div = document.createElement("div");
    div.style.width = divSize + "px";
    div.style.height = divSize + "px";
    boxes.append(div);
    div.style.background = getRandomHexColor();
    divSize += 10;
  }
}

function destroyBoxes() {
  boxes.remove();
}
    
buttonCreate.addEventListener("click", () => {
  const amount = value;
  createBoxes(amount);
});

buttonDestroy.addEventListener("click", () => {
  destroyBoxes();
});