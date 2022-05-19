const textSize = document.querySelector("input");
const output = document.querySelector("#text");

textSize.addEventListener("input", (event) => {
  const sizeValue = textSize.value;
  output.style.fontSize = sizeValue + "px";
});