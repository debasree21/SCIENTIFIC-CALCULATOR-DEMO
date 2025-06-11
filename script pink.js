function appendOperator(value) {
  document.getElementById('display').value += value;
}

function appendFunction(func) {
  const display = document.getElementById('display');
  if (func === 'sqrt') {
    display.value += 'Math.sqrt(';
  } else if (func === 'log') {
    display.value += 'Math.log10(';
  } else {
    display.value += 'Math.' + func + '(';
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById('display');
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

