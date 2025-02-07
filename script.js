const display = document.querySelector(".display")

function displayValue(input) {
  display.value += input
}

function clearAll() {
  display.value = ""
}

function deleteOne() {
  if (display.value === "Error") {
    display.value = ""
  } else {
    display.value = display.value.slice(0, -1)
  }
}

function calculate() {
  try {
    display.value = eval(display.value)
  } catch (err) {
        display.value = "Error"    
  }
}
