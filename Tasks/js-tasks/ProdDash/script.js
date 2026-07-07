const homeContainer = document.querySelector("#home-container");
const todoContainer = document.querySelector(".todo");
const dailyPlanner = document.querySelector(".daily-planner");
const dailyGoals = document.querySelector(".daily-goals");
const pomodoro = document.querySelector(".pomodoro");
const quoteContainer = document.querySelector(".quote");
const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
console.log(themeIcon)

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");

  themeIcon.src = "./assets/images/moon.png";
}

function toggleTheme() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");

    themeIcon.src =
      "/assets/images/moon.png";
  } else {
    localStorage.setItem("theme", "light");

    themeIcon.src =
      "/assets/images/sun.png";
  }
}

toggleBtn.addEventListener("click", toggleTheme);

function showPage(pageId) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.add("hidden");
  });

  document.getElementById(pageId).classList.remove("hidden");

  homeContainer.classList.add("hidden");
}

homeContainer.addEventListener("click", (e) => {
  const card = e.target.closest(".hub-card");

  if (!card) return;

  showPage(card.dataset.page);
});

function goBack(e) {
  if (e) e.preventDefault();
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.add("hidden");
  });

  if (homeContainer) {
    homeContainer.classList.remove("hidden");
  }
}
