let outputWindow = document.getElementById('output');
let numbersOperatorsArray = document.querySelectorAll('.numberButton, .operationButton');
let calculate = document.getElementById('equalsButton');

for (let button of numbersOperatorsArray) {
  button.addEventListener('click', (target) => outputWindow.innerText += button.innerText);
}

calculate.addEventListener('click', (target) => {
  let answer = eval(outputWindow.innerText);
  outputWindow.innerText = answer.innerText;
  console.log (answer);
}
)

document.getElementById('clearButton').addEventListener('click', function() {
  location.reload();
}
)

