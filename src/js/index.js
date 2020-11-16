import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

const div = document.createElement("div");
const span = document.createElement("span");

document.body.appendChild(div);
document.body.appendChild(span);

let height = 0;
div.style.background = "red";
div.style.height = `${height}px`;

let grow = true;

window.addEventListener("scroll", function () {
  if (height == 0) {
    grow = true;
  } else if (height >= window.innerHeight / 2) {
    grow = false;
  }

  if (grow == true) {
    height += 5;
    div.style.height = `${height}px`;
    div.style.background = "red";
    span.style.top = `${height}px`;
    span.style.background = "green";
  } else if (grow == false) {
    height -= 5;
    div.style.height = `${height}px`;
    div.style.background = "green";
    span.style.top = `${height}px`;
    span.style.background = "red";
  }
});
