let outputWindow = document.getElementById('output');
let numbersOperatorsArray = document.querySelectorAll('.numberButton, .operationButton');
let calculate = document.getElementById('equalsButton');
let newOperation = false;

//  TO-DO
//	figure out how limit output window to 22 numbers and operations
//	figure out how to start a new calculation when a number button is clicked after equals,
//	but continue current calculation if an operator button is clicked

//Output Window code & code to start new operation
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

//  Calculations code, still won't keep current calc going with an operator button click
//  Starts new calc when number button clicked after equals button
//  Replaces "x" character with asterisk (*) to force multiplication operation
calculate.addEventListener('click', (target) => {
  let answer = eval(outputWindow.innerText.replace("x", "*"));
  outputWindow.innerText = answer;
  newOperation = true;
  console.log (answer);
}
)

//  Clear Button code
document.getElementById('clearButton').addEventListener('click', function(){
  outputWindow.innerText = outputWindow.innerText.slice(0, -1);
}
)

//  All Clear Button code
document.getElementById('allClearButton').addEventListener('click', function() {
  location.reload();
}
)

