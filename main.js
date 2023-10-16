let outputWindow = document.getElementById('output');
let numbersArray = document.querySelectorAll('.numberButton');
let operationArray = document.querySelectorAll('.operationButton');
let clearButton = document.getElementById('clearButton');
let enterButton = document.querySelector('.enterButton');

// function clear {
//   document.getElementById('clearButton').value = "";
// }

for (let el of numbersArray) {
  el.addEventListener('click', (target) => outputWindow.innerText += el.innerText);
}
for (let el of operationArray) {
  el.addEventListener ('click', (target) => outputWindow.innerText += el.innerText);
}
// // for (let el of clearButton) {
// //   el.addEventListener ('click', (target) => outputWindow.innerText = "");
// // }