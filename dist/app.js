const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const countBtn = document.querySelector(".count");
const error = document.querySelector(".error");
const costInfo = document.querySelector(".cost-info");
const cost = document.querySelector(".cost");
const errorHandler = () => {
    const tipValue = Number(tip.value);
    if (price.value == "" || people.value == "" || tipValue == 0) {
        error.textContent = "Uzupełnij wszystkie pola!";
    }
    else {
        error.textContent = "";
        calculatePrice();
    }
};
const calculatePrice = () => {
    const newPrice = parseFloat(price.value);
    const newTip = parseInt(tip.value);
    const newPeople = parseFloat(people.value);
    const result = Number((newPrice + (newPrice * newTip)) / (newPeople));
    console.log(result);
    costInfo.style.display = "block";
    cost.textContent = result.toFixed(2);
};
countBtn.addEventListener("click", errorHandler);
console.log(price.value);
