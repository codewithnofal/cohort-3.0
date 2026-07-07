const plannerDate = document.getElementById("planner-date");
const plannerInputs = document.querySelectorAll("#planner-list input");

plannerInputs.forEach((input) => {
  input.addEventListener("input", savePlanner);
});

function updatePlannerDate() {
  const today = new Date();

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  plannerDate.textContent = today.toLocaleDateString("en-IN", options);
}

updatePlannerDate();

function savePlanner() {
  const plannerData = {};

  plannerInputs.forEach((input) => {
    plannerData[input.dataset.time] = input.value;
  });

  localStorage.setItem("dailyPlanner", JSON.stringify(plannerData));
}

function loadPlanner() {
  const savedPlanner = JSON.parse(localStorage.getItem("dailyPlanner"));

  if (!savedPlanner) return;

  plannerInputs.forEach((input) => {
    input.value = savedPlanner[input.dataset.time] || "";
  });
}

loadPlanner();
