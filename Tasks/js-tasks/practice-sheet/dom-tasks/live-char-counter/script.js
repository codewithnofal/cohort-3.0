let textArea = document.querySelector("textarea");
let counter = document.querySelector(".counter");

textArea.addEventListener("input", (e) => {
  let val = e.target.value;
  counter.textContent = val.length;
});
