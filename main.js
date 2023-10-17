let outputWindow = document.getElementById('output');
let numbersOperatorsArray = document.querySelectorAll('.numberButton, .operationButton');
let calculate = document.getElementById('equalsButton');
let newOperation = false;

//Output Window code & code to start new operation
for (let button of numbersOperatorsArray) {
  button.addEventListener('click', (target) => {
   
    if (outputWindow.innerText.length <= 21 ) {
      if (button.classList.contains('numberButton') && newOperation) {
        outputWindow.innerText = button.innerText;
        }
    else {
      outputWindow.innerText += button.innerText;
    }
    newOperation = false;
   }
  })
}

//  Calculations code
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

