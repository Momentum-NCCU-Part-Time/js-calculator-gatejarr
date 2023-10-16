let outputWindow = document.getElementById('output');
let numbersArray = document.querySelectorAll('button');
// let operationArray = document.querySelectorAll('.operationButton');
let clearButton = document.getElementById('clearButton');
let enterButton = document.getElementById('enterButton');
let calculate = outputWindow;


for (let el of numbersArray) {
  el.addEventListener('click', (target) => outputWindow.innerText += el.innerText);
}
// for (let el of operationArray) {
//   el.addEventListener ('click', (target) => outputWindow.innerText += el.innerText);
// }

//eval(calculate) {
//}

// for (let el of clearButton) {
//   el.addEventListener ('click', (target) => outputWindow.innerText = "");
// }