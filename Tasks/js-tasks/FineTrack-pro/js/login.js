const form = document.querySelector("form");
const register = document.querySelector("#register")


let users = JSON.parse(localStorage.getItem("users")) || [];

register.addEventListener("click", ()=>{
  window.location.href = "register.html"
})

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = e.target[0].value.trim();
  let password = e.target[1].value.trim();

  if (username === "" || password === "") {
    alert("username or password are blank!");
    return;
  }
  if (password.length < 8) {
    alert("password must be 8 char long");
    return;
  }

  let currentUser = users.find((u) => {
    return u.username === username && u.password === password;
  });

  if (!currentUser) {
    Swal.fire({
      text: "User not Found !",
      icon: "error",
      theme: "dark",
    });
    return;
  } else {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Login Successfully",
      showConfirmButton: false,
      text: "Redirecting to Dashboard...",
      timer: 1500,
    });

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1600);

    e.target[0].value = "";
    e.target[1].value = "";
  }
});
