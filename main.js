let outputWindow = document.getElementById('output');
let numbersOperatorsArray = document.querySelectorAll('.numberButton, .operationButton');
let calculate = document.getElementById('equalsButton');
let newOperation = false;

// for (let button of numbersOperatorsArray) {
//   button.addEventListener('click', (target) => outputWindow.innerText += button.innerText);
// }

//	figure out how limit output window to 22 numbers and operations
//	figure out how to start a new calculation when a number button is clicked after equals,
//	but continue current calculation if an operator button is clicked

calculate.addEventListener('click', (target) => {
  let answer = eval(outputWindow.innerText.replace("x", "*"));
  outputWindow.innerText = answer;
  newOperation = true;
  console.log (answer);
}
)
for (let button of numbersOperatorsArray) {
  button.addEventListener('click', (target) => {
    if (button.classList.contains('numberButton') && newOperation)
    {
      outputWindow.innerText = button.innerText;
      newOperation = false;
    }
    else {
      outputWindow.innerText += button.innerText;
    }
  })
}
// document.getElementById('clearButton').addEventListener('click', function())

document.getElementById('allClearButton').addEventListener('click', function() {
  location.reload();
}
)

