const createBtn = document.querySelector(".create-btn");
const closeBtn = document.querySelector(".close");
const form = document.querySelector(".container");
console.log(createBtn);
console.log(form);

createBtn.addEventListener("click", () => {
  form.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
  form.style.display = "none";
});
