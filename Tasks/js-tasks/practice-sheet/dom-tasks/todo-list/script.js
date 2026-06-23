const inp = document.querySelector("input");
const addBtn = document.querySelector(".add-btn");
const ul = document.querySelector("ul");

addBtn.addEventListener("click", (e) => {
  let inpVal = inp.value;

  if (inp.value.trim() === "") return;

  let li = document.createElement("li");
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Delete";

  li.textContent = inpVal;
  li.appendChild(deleteBtn);
  ul.appendChild(li);
  inp.value = "";

 

  deleteBtn.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
});