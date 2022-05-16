const input = document.querySelector("input");
const getLength = document.querySelector('input[data-length]');
const length = getLength.dataset.length;
const getId = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
    if(event.currentTarget.value.length===Number(length)){
        getId.classList.add("valid");
        getId.classList.remove("invalid");
    }
    else{
        getId.classList.remove("valid");
        getId.classList.add("invalid");
    }
  });