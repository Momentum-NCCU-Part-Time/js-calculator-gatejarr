let outputWindow = document.getElementById('output');
let numbersOperatorsArray = document.querySelectorAll('.numberButton, .operationButton');
let calculate = document.getElementById('equalsButton');

for (let button of numbersOperatorsArray) {
  button.addEventListener('click', (target) => outputWindow.innerText += button.innerText);
}

//  limit output window to 22 numbers and operations

calculate.addEventListener('click', (target) => {
  let answer = eval(outputWindow.innerText);
  outputWindow.innerText = answer;
  console.log (answer);
}
)

document.getElementById('allClearButton').addEventListener('click', function() {
  location.reload();
}
)

