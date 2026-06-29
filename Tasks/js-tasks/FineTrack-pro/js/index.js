const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
  window.location.href = "dashboard.html";
} else {
  window.location.href = "login.html";
}
