let firstNumber = "";
let operator = "";
let secondNumber = "";

const display = document.querySelector(".display");
const numbersButtons = document.querySelectorAll(".number");
const operatorsButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const egalButton = document.querySelector(".egal");
const changeOperatorButton = document.querySelector(".changeoperator");
// const pourcentButton = document.querySelector(".pourcent");

display.textContent = "0";

numbersButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		if (operator === "") {
			firstNumber += button.textContent;
			display.textContent = firstNumber;
		} else {
			secondNumber += button.textContent;
			display.textContent = secondNumber;
		}
	});
});

clearButton.addEventListener("click", () => {
	firstNumber = "";
	operator = "";
	secondNumber = "";
	display.textContent = "0";
});

operatorsButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		operator = button.textContent;
	});
});

changeOperatorButton.addEventListener("click", () => {
	if (operator === "") {
		firstNumber = (-parseFloat(firstNumber)).toString();
		display.textContent = firstNumber;
	} else {
		secondNumber = (-parseFloat(secondNumber)).toString();
		display.textContent = secondNumber;
	}
});

egalButton.addEventListener("click", (e) => {
	if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
		let result = operate(firstNumber, operator, secondNumber);
		console.log(result);
		display.textContent = result;
		firstNumber = "";
		secondNumber = "";
		operator = "";
	}
});

const operate = (firstNumber, operator, secondNumber) => {
	firstNumber = parseFloat(firstNumber);
	secondNumber = parseFloat(secondNumber);

	switch (operator) {
		case "+":
			return add(firstNumber, secondNumber);
			break;
		case "-":
			return subtract(firstNumber, secondNumber);
			break;
		case "/":
			return divise(firstNumber, secondNumber);
			break;
		case "x":
			return multiply(firstNumber, secondNumber);
			break;
		case "%":
			return multiply(firstNumber, secondNumber);
			break;
		default:
			return "Error: Invalid operator";
	}
};

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divise = (a, b) => a / b;
const multiply = (a, b) => {
	if (b === 0) {
		// Display error message and prevent division by zero
		return "Error: Cannot divide by zero";
	}

	return a * b;
};

const pourcent = (a, b) => {
	return (a * b) / 100;
};
