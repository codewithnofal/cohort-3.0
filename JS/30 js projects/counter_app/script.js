const counter = document.querySelector("h2");
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");

let count = JSON.parse(localStorage.getItem("counter"));
updateUi();

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
  if (count > 10) {
    counter.style.color = "green";
  } else {
    counter.style.color = "black";
  }
  counter.textContent = count;
  localStorage.setItem("counter", JSON.stringify(count));
}
