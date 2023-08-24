let firstNumber = "";
let operator = "";
let secondNumber = "";

const display = document.querySelector(".display");
const numbersButtons = document.querySelectorAll(".number");
const operatorsButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".egal");
const changeOperatorButton = document.querySelector(".changeoperator");
const decimalButton = document.querySelector(".decimal");
const pourcentButton = document.querySelector(".pourcent");

display.textContent = "0";

document.addEventListener("keydown", (event) => {
	const key = event.key;

	if (!isNaN(key) || key === ".") {
		if (operator === "") {
			firstNumber += key;
			display.textContent = firstNumber;
		} else {
			secondNumber += key;
			display.textContent = secondNumber;
		}
	} else if (key === "+" || key === "-" || key === "*" || key === "/") {
		operator = key;
	} else if (key === "Enter") {
		// Perform calculation when Enter key is pressed
		if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
			const result = operate(firstNumber, operator, secondNumber);
			display.textContent = result;
			firstNumber = result.toString();
			operator = "";
			secondNumber = "";
		}
		event.preventDefault();
	}

	// Prevent default action for certain keys
	if (["+", "-", "*", "/", "Enter", "Backspace"].includes(key)) {
		event.preventDefault();
	}
});

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

decimalButton.addEventListener("click", () => {
	if (operator === "") {
		if (!firstNumber.includes(".")) {
			firstNumber += ".";
			display.textContent = firstNumber;
		}
	} else {
		if (!secondNumber.includes(".")) {
			secondNumber += ".";
			display.textContent = secondNumber;
		}
	}
});

equalButton.addEventListener("click", (e) => {
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
			return divide(firstNumber, secondNumber);
			break;
		case "x":
			return multiply(firstNumber, secondNumber);
			break;
		case "%":
			return pourcent(firstNumber, secondNumber);
			break;
		default:
			return "Error: Invalid operator";
	}
};

const add = (a, b) => (a + b).toFixed(2);
const subtract = (a, b) => (a - b).toFixed(2);
const divide = (a, b) => (a / b).toFixed(2);
const multiply = (a, b) => {
	if (b === 0) {
		// Display error message and prevent division by zero
		return "Error: Cannot divide by zero";
	}

	return (a * b).toFixed(2);
};

const pourcent = (a, b) => {
	return ((a * b) / 100).toFixed(2);
};
