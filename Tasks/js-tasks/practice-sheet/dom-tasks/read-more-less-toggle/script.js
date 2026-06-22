const extraText = document.querySelector(".extra-text");
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  if (extraText.classList.toggle("show")) {
    toggleBtn.textContent = "Read Less";
  } else {
    toggleBtn.textContent = "Read More";
  }
});
