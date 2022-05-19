let counterValue = 0;

const buttonMinus = document.querySelector('[data-action="decrement"]');
const value = document.querySelector("#value");

buttonMinus.addEventListener("click", () => {
    counterValue -=1;
    value.textContent = counterValue;
});

const buttonPlus = document.querySelector('[data-action="increment"]');

buttonPlus.addEventListener("click", () => {
    counterValue +=1;
    value.textContent = counterValue;
});