const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const result = document.querySelector("#result");

let startValue = 1;

plusButton.addEventListener("click", function () {
  if (startValue === 100) {
    return false;
  }
  startValue++;
  showOutput();
});

minusButton.addEventListener("click", function () {
  if (startValue === 0) {
    return false;
  }
  startValue--;
  showOutput();
});

function showOutput() {
  result.textContent = startValue;
}
