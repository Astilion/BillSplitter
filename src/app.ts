const price: HTMLInputElement = document.querySelector("#price");
const people: HTMLInputElement = document.querySelector("#people");
const tip: HTMLSelectElement = document.querySelector("#tip");
const countBtn: HTMLButtonElement = document.querySelector(".count");
const error: HTMLElement = document.querySelector(".error");
const costInfo: HTMLElement = document.querySelector(".cost-info");
const cost: HTMLElement = document.querySelector(".cost");

const errorHandler = () => {
	const tipValue: number = Number(tip.value);
	if (price.value == "" || people.value == "" || tipValue == 0) {
		error.textContent = "Uzupełnij wszystkie pola!";
	} else {
		error.textContent = "";
		calculatePrice();
	}
};
const calculatePrice = () => {
	const newPrice = parseFloat(price.value);
	const newTip= parseInt(tip.value);
	const newPeople = parseFloat(people.value);

	const result: number = Number(
		(newPrice + (newPrice * newTip)) / (newPeople)
	);
	console.log(result);

	costInfo.style.display = "block";
	cost.textContent = result.toFixed(2);
};

countBtn.addEventListener("click", errorHandler);
console.log(price.value);
