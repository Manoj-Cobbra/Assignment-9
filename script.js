let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
  display.value = display.value.replace(/x/g, '*').replace(/÷/g, '/');
}

function clearDisplay() {
  display.value = "";
  display.placeholder = "0";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}