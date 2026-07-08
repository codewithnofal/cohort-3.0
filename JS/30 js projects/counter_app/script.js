const counter = document.querySelector("h2");
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");

let count = 0;

increaseBtn.addEventListener("click", () => {
  count++;
  updateUi();
});

decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateUi();
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateUi();
});

function updateUi() {
  counter.textContent = count;
}
