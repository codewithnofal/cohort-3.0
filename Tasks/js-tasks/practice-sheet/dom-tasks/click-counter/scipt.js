let h1 = document.querySelector("h1");
let btn = document.querySelector("button");

let count = 1;
btn.addEventListener("click", () => {
  h1.textContent = count++;
});
