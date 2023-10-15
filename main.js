let displayWindow = document.getElementById("display");
let mathArray = document.querySelectorAll(".maths");
let buttons = document.querySelectorAll("button");

for (let el of mathArray) {
  el.addEventListener('click', (target) => displayWindow.innerText += el.innerText);
}