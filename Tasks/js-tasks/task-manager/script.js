const createBtn = document.querySelector(".create-btn");
const closeBtn = document.querySelector(".close");
const formContainer = document.querySelector(".container");
const form = document.querySelector("form");
const tasksCon = document.querySelector(".tasks");
const total = document.querySelector(".totalc");
let completed = document.querySelector(".completedc");
let pandingTask = document.querySelector(".pendingc");
const taskImg = document.querySelector(".task-img");
const filterInp = document.querySelector(".filtering input");
const themeToggle = document.querySelector(".theme-toggle");

let Tasks = JSON.parse(localStorage.getItem("tasks")) || [];
ui();
updateCounters();

let updateIndex = null;

function updateCounters() {
  total.textContent = Tasks.length;

  const completedTasks = Tasks.filter(
    (task) => task.status === "completed",
  ).length;

  completed.textContent = completedTasks;

  pandingTask.textContent = Tasks.length - completedTasks;
}

function ui() {
  const today = new Date();
  const date = today.getDate();
  const month = today.toLocaleString("en-us", { month: "long" });
  const year = today.getFullYear();
  tasksCon.innerHTML = "";

  Tasks.forEach((elem, idx) => {
    return (tasksCon.innerHTML += `<div class="task">
            <p>${elem.taskName}</p>
            <div class="category">
              <p>${elem.category}</p>
              <div class="stat ${
                elem.status === "completed"
                  ? "completed-status"
                  : "pending-status"
              }">
  ${elem.status === "completed" ? "✓ Completed" : "⏳ Pending"}
</div>
              <div class="calender">
                <i class="ri-calendar-line"></i>
                <span>${date}-${month}-${year}</span>
              </div>
            </div>
            <!-- <div class="stat">Pending</div> -->
            <div class="marks">
              <i onclick="update('${elem.taskName}')" class="ri-pencil-line"></i>
              <i onclick="completedTask('${idx}')" class="ri-check-line"></i>
              <i onclick="deleteTask('${idx}')" class="ri-delete-bin-6-line"></i>
            </div>
          </div>`);
  });
}

let update = (name) => {
  let tasks = Tasks.find((e) => e.taskName == name);
  updateIndex = Tasks.findIndex((e) => e.taskName == name);
  console.log(updateIndex);
  formContainer.style.display = "flex";
  form[0].value = tasks.taskName;
  form[1].value = tasks.category;
  form[2].textContent = "Update Task";
  total.textContent = Tasks.length;
  localStorage.setItem("tasks", JSON.stringify(Tasks));
};

let deleteTask = (index) => {
  Tasks.splice(index, 1);

  localStorage.setItem("tasks", JSON.stringify(Tasks));

  updateCounters();
  ui();
};

let completedTask = (index) => {
  Tasks[index].status =
    Tasks[index].status === "pending" ? "completed" : "pending";

  localStorage.setItem("tasks", JSON.stringify(Tasks));

  updateCounters();
  ui();
};

let searchTasks = () => {};
taskImg.style.display = "block";

createBtn.addEventListener("click", () => {
  formContainer.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
  formContainer.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let taskName = e.target[0].value.trim();
  let category = e.target[1].value.trim();

  if (taskName === "" || category.trim() === "") return;

  let obj = {
    taskName,
    category,
    status: "pending",
  };
  if (updateIndex !== null) {
    Tasks[updateIndex] = {
      ...Tasks[updateIndex],
      taskName,
      category,
    };
    updateIndex = null;
    total.textContent = Tasks.length;
    localStorage.setItem("tasks", JSON.stringify(Tasks));
  } else {
    Tasks.push(obj);
    total.textContent = Tasks.length;
    taskImg.style.display = "none";
    localStorage.setItem("tasks", JSON.stringify(Tasks));
  }
  form.reset();
  updateCounters();

  ui();
  formContainer.style.display = "none";
});

let currentTheme = localStorage.getItem("theme") || "light";

if (currentTheme === "dark") {
  document.body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const theme = document.body.classList.contains("dark") ? "dark" : "light";

  localStorage.setItem("theme", theme);
});

const bubbleBtn = document.querySelector(".bubble-btn");

const captureBtn = document.querySelector(".capture-btn");

const grand = document.querySelector(".grandparent");

const parent = document.querySelector(".parent");

const child = document.querySelector(".child");

const output = document.querySelector(".output");

function resetBoxes() {
  grand.classList.remove("active");
  parent.classList.remove("active");
  child.classList.remove("active");
}

bubbleBtn.addEventListener("click", () => {
  resetBoxes();

  output.textContent = "Event Bubbling Started...";

  setTimeout(() => {
    child.classList.add("active");
    output.textContent = "Step 1 : Child";
  }, 500);

  setTimeout(() => {
    parent.classList.add("active");
    output.textContent = "Step 2 : Parent";
  }, 1500);

  setTimeout(() => {
    grand.classList.add("active");
    output.textContent = "Step 3 : Grandparent";
  }, 2500);
});

captureBtn.addEventListener("click", () => {
  resetBoxes();

  output.textContent = "Event Capturing Started...";

  setTimeout(() => {
    grand.classList.add("active");
    output.textContent = "Step 1 : Grandparent";
  }, 500);

  setTimeout(() => {
    parent.classList.add("active");
    output.textContent = "Step 2 : Parent";
  }, 1500);

  setTimeout(() => {
    child.classList.add("active");
    output.textContent = "Step 3 : Child";
  }, 2500);
});
