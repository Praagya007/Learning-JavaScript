const display = document.getElementById("Input");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const decimalButton = document.querySelector(".decimal");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".deleteAll");
const deleteButton = document.querySelector(".deletePrevious");
const themeToggle = document.getElementById("themeToggle");


let expression = "0";

function updateDisplay() {
  display.value = expression;
}

function handleNumber(num) {
  if (expression === "Error") {
    expression = num;
  } else {
    const lastPart = expression.split(/[-+*/()%]/).pop(); //Split the expression once you find these characters, remove it from the original string and store it. Works for 0 as well at first since lastPart's value will be stored as 0 if none of operators exist.
    if (lastPart === "0" && num === "0") return;
    if (lastPart === "0") {
      expression = expression.slice(0, -1) + num;
    } else {
      expression += num;
    }
  }
  updateDisplay();
}

function handleOperator(op) {
  if (expression === "Error") return;

  const lastChar = expression[expression.length - 1];
  const operators = "+-*/";

  if (op === "%" || op === "(" || op === ")") {
    expression += op;
  } else if (operators.includes(lastChar)) {
    expression = expression.slice(0, -1) + op;
  } else {
    expression += op;
  }

  updateDisplay();
}

function handleDecimal() {
  if (expression === "Error") return;

  const operators = "+-*/%(";
  const lastChar = expression[expression.length - 1];
  const lastPart = expression.split(/[-+*/()%]/).pop();

  if (operators.includes(lastChar)) {
    // Start new number after an operator with "0."
    expression += "0.";
  } else if (!lastPart.includes(".")) {
    if (expression === "0") {
      expression = "0."; // Replace initial 0 with 0.
    } else {
      expression += ".";
    }
  }

  updateDisplay();
}


function deletePrevious() {
  if (expression === "Error") {
    expression = "0";
  } else if (expression.length > 1) {
    expression = expression.slice(0, -1);
  } else {
    expression = "0";
  }
  updateDisplay();
}

function clearAll(){
  expression = "0";
  updateDisplay();
  }

function themeToggling(){
  const isDark=themeToggle.checked;
document.body.classList.toggle("dark-mode", isDark);
  document.body.classList.toggle("light-mode", !isDark);
  localStorage.setItem("theme",isDark?"dark":"light");
}

function calculate() {
  try {
    
    const result = math.evaluate(expression);

    if (!isFinite(result)) { //Check whether it is finite or not. Useful when divided by 0.  
      expression = "Error";
    } else {
      expression = result.toString();
    }
  } catch {
    expression = "Error";
  }

  updateDisplay();
}

// Button Event Listeners
numberButtons.forEach(button =>
  button.addEventListener("click", () => handleNumber(button.textContent))
);

operatorButtons.forEach(button =>
  button.addEventListener("click", () => handleOperator(button.textContent))
);

decimalButton.addEventListener("click", handleDecimal);
equalButton.addEventListener("click", calculate);

clearButton.addEventListener("click", () => {
 clearAll();
  
});

deleteButton.addEventListener("click", deletePrevious);

// Theme toggle
themeToggle.addEventListener("change", () => {
  themeToggling();  
});

// Keyboard Support
document.addEventListener("keydown", event => {
  const key = event.key; //.key is an inbuilt property.

  if (!isNaN(key)) {
    handleNumber(key);
  } else if ("+-*/()%".includes(key)) {
    handleOperator(key);
  } else if (key === ".") {
    handleDecimal();
  } else if (key === "Enter" || key === "=") {
    event.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    deletePrevious();
  } else if (key === "Delete" || key==="Escape") {
    clearAll();
  }
  else if (event.shiftKey && key.toLowerCase() === "t") {
    themeToggle.checked = !themeToggle.checked; // Toggle the switch
    themeToggling(); // Apply theme
  }
});

// === Load and Apply Theme (before initial render) ===
const savedTheme = localStorage.getItem("theme"); //Get the item with keynamed theme.

if (savedTheme === "dark") {
  themeToggle.checked = true;
  document.body.classList.add("dark-mode");
} else {
  themeToggle.checked = false;
  document.body.classList.add("light-mode");
}

// Initialize
updateDisplay();
