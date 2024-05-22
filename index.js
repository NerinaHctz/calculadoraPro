let inputText = document.querySelector("#display");
let enteredNumbers = [];
let actualElement = "0";
let acumulate = 0;
let operations = [];

const number = (number) => {
  inputText.value += number;
  actualElement += number;
};

const eraseNumber = () => {
  inputText.value = inputText.value.slice(0, -1);
  actualElement = actualElement.slice(0, -1);
};

const getPercent = () => {
  actualElement = parseFloat(actualElement) / 100;
  inputText.value = actualElement;
};

const divideNumbers = () => {
  inputText.value += " / ";
  enteredNumbers.push(parseFloat(actualElement));
  actualElement = "";
  operations.push(" / ");
};

const sumNumbers = () => {
  inputText.value += " + ";
  enteredNumbers.push(parseFloat(actualElement));
  actualElement = "";
  operations.push(" + ");
};

const substractNumbers = () => {
  inputText.value += " - ";
  enteredNumbers.push(parseFloat(actualElement));
  actualElement = "";
  operations.push(" - ");
};

const multiplyNumbers = () => {
  inputText.value += " x ";
  enteredNumbers.push(parseFloat(actualElement));
  actualElement = "";
  operations.push(" x ");
};

const getSquareRoot = () => {
  const inputValue = parseFloat(inputText.value);
  if (!isNaN(inputValue)) {
    const squareRoot = Math.sqrt(inputValue);
    inputText.value = squareRoot;
  } else {
    inputText.value = "√";
    actualElement = "";
  }
};

const dot = () => {
  if (!inputText.value.includes(".")) {
    inputText.value += ".";
    actualElement += ".";
  }
};

const equal = () => {
  inputText.value += " = ";
  enteredNumbers.push(parseFloat(actualElement));
  actualElement = "";

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === " x " || operations[i] === " / ") {
      if (operations[i] === " x ") {
        enteredNumbers[i] *= enteredNumbers[i + 1];
      } else {
        if (enteredNumbers[i + 1] !== 0) {
          enteredNumbers[i] /= enteredNumbers[i + 1];
        } else {
          console.error("No se puede dividir entre 0.");
          return undefined;
        }
      }
      enteredNumbers.splice(i + 1, 1);
      operations.splice(i, 1);
      i--;
    }

    acumulate = enteredNumbers[0];

    for (let i = 1; i < enteredNumbers.length; i++) {
      if (operations[i - 1] === " + ") {
        acumulate += enteredNumbers[i];
      } else if (operations[i - 1] === " - ") {
        acumulate -= enteredNumbers[i];
      }
    }

    inputText.value = inputText.value + acumulate;
  }
  enteredNumbers = [];
  operations = [];
};

const clearNumbers = () => {
  enteredNumbers = [];
  actualElement = "0";
  acumulate = 0;
  operations = [];
  inputText.value = "";
};
