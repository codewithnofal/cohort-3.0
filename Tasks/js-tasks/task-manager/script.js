const createBtn = document.querySelector(".create-btn");
const closeBtn = document.querySelector(".close");
const form = document.querySelector("form");

let Tasks = [];

createBtn.addEventListener("click", () => {
  form.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
  form.style.display = "none";
});

form.addEventListener("click", (e) => {
  e.preventDefault();
  let name = e.target[0].value;
  console.log(name);
});
