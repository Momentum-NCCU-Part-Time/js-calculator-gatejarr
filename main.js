let outputWindow = document.getElementById('output');
let numbersOperatorsArray = document.querySelectorAll('.numberButton, .operationButton');
let clearButton = document.getElementById('clearButton');
let calculate = document.getElementById('equalsButton');


for (let button of numbersOperatorsArray) {
  button.addEventListener('click', (target) => outputWindow.innerText += button.innerText);
}

calculate.addEventListener('click', (target) => {
  let answer = eval(outputWindow.innerText);
  console.log (answer);
}
)




















// for (let el of clearButton) {
//   el.addEventListener ('click', (target) => outputWindow.innerText = "");
// }