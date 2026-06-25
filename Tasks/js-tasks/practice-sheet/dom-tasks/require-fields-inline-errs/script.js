const form = document.querySelector("form");
const nameInp = document.querySelector(".name-error");
const emailInp = document.querySelector(".email-error");

let userVal = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.target[0].value.trim();
  let email = e.target[1].value.trim();

  if (name === "") {
    nameInp.classList.add("error");
    nameInp.textContent = "This field is required.";
    return;
  }
  if (email === "") {
    emailInp.classList.add("error");
    emailInp.textContent = "This field is required.";
    return;
  }

  let obj = {
    name,
    email,
  };

  userVal.push(obj);

  e.target[0].value = "";
  e.target[1].value = "";
});

console.log(userVal);
