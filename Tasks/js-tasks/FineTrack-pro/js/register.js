const form = document.querySelector("form");
const login = document.querySelector("#login")

login.addEventListener("click", ()=>{
  window.location.href = "login.html"
})


let Users = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = e.target[0].value.trim();
  let password = e.target[1].value.trim();

  if (username === "" || password === "") {
    alert("username or password are blank!");
    return;
  }
  if (password.length < 8) {
    Swal.fire({
        text: "password must be 8 char long !",
        icon: "warning",
        theme: "dark"
    })
    return;
  }

  let findUser = Users.find((u) => u.username === username);
  if (findUser) {
    Swal.fire({
        text: "user already exist !!",
        icon: "warning",
        theme: "dark"
    });
    return;
  }

  Users.push({
    id: Date.now(),
    username,
    password,
    currency: "INR",
    theme: "light",
    transactions: [],
  });

  localStorage.setItem("users", JSON.stringify(Users));

  Swal.fire({
    position: "top-center",
    icon: "success",
    title: "Registered Successfully",
    showConfirmButton: false,
    text: "Redirecting to Login...",
    timer: 1500,
  });

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1600);

  e.target[0].value = "";
  e.target[1].value = "";
});
