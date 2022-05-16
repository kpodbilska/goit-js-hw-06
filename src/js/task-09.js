function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");

button.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.style.background = getRandomHexColor();
});