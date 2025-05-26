let display = document.getElementById('display');
let memory = 0;

function appendValue(val) {
  display.value += val;
  clickSound.play();
}

function clearDisplay() {
  display.value = '';
   clickSound.play();
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
   clickSound.play();
}

function calculate() {
  try {
    let result = eval(display.value);
    if (!isFinite(result)) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch (e) {
    display.value = "Error";
  } 
  clickSound.play();

}

function calculateSqrt() {
  try {
    let val = parseFloat(display.value);
    if (val < 0) {
      display.value = "Error";
    } else {
      display.value = Math.sqrt(val);
    }
  } catch {
    display.value = "Error";
  }
   clickSound.play();
}

function calculatePercentage() {
  try {
    let val = parseFloat(display.value);
    display.value = val / 100;
  } catch {
    display.value = "Error";
  }
   clickSound.play();
}

function memoryAdd() {
  try {
    memory += parseFloat(display.value) || 0;
  } catch {}
}

function memorySubtract() {
  try {
    memory -= parseFloat(display.value) || 0;
  } catch {}
   clickSound.play();
}

function memoryRecall() {
  display.value = memory;
   clickSound.play();
}

function memoryClear() {
  memory = 0;
   clickSound.play();
}
document.addEventListener('keydown', function (e) {
  if (e.key.match(/[0-9+\-*/.=]/)) {
    if (e.key === '=') calculate();
    else appendValue(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    deleteLast();
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
   clickSound.play();
});

const clickSound = new Audio("calculatesound.mp3");