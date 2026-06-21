let body = document.querySelector("body");
let btn = document.querySelector("button");

let colours = ["green", "red", "blue", "lightseagreen"];

let currColour = 0;

btn.addEventListener("click", () => {
  if (currColour > colours.length-1) {
    currColour = 0;
  }
  body.style.backgroundColor = colours[currColour];
  currColour++;
});
