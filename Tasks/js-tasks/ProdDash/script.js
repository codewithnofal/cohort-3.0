const homeContainer = document.querySelector("#home-container");
const todoContainer = document.querySelector(".todo");
const dailyPlanner = document.querySelector(".daily-planner");
const dailyGoals = document.querySelector(".daily-goals");
const pomodoro = document.querySelector(".pomodoro");
const quoteContainer = document.querySelector(".quote");


// let falg = false;
// homeContainer.addEventListener("click", (e) => {
//   if (e.target.id == "todo") {
//     todoContainer.style.display = "block";
//     homeContainer.style.display = "none";
//   } else if (e.target.id == "daily-planner") {
//     homeContainer.style.display = "none";
//     dailyPlanner.style.display = "block";
//   } else if (e.target.id == "daily-goals") {
//     homeContainer.style.display = "none";
//     dailyPlanner.style.display = "block";
//   } else if (e.target.id == "pomodoro") {
//     homeContainer.style.display = "none";
//     pomodoro.style.display = "block";
//   } else if (e.target.id == "quote") {
//     homeContainer.style.display = "none";
//     quoteContainer.style.display = "block";
//   }
// });

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
  document.querySelectorAll('.page').forEach((page) => {
    page.classList.add('hidden');
  });

  
  if (homeContainer) {
    homeContainer.classList.remove('hidden');
  }
}