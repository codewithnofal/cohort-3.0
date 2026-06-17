const createBtn = document.querySelector(".create-btn");
const closeBtn = document.querySelector(".close");
const formContainer = document.querySelector(".container");
const form = document.querySelector("form");
const tasksCon = document.querySelector(".tasks");

let Tasks = [];
let updateIndex = null;

const today = new Date();
const date = today.getDate();
const month = today.toLocaleString("en-us", { month: "long" });
const year = today.getFullYear();

let ui = () => {
  tasksCon.innerHTML = "";

  Tasks.forEach((elem, idx) => {
    return (tasksCon.innerHTML += `<div class="task">
            <p>${elem.taskName}</p>
            <div class="category">
              <p>${elem.category}</p>
              <div class="calender">
                <i class="ri-calendar-line"></i>
                <span>${date}-${month}-${year}</span>
              </div>
            </div>
            <!-- <div class="stat">Pending</div> -->
            <div class="marks">
              <i onclick="update('${elem.taskName}')" class="ri-pencil-line"></i>
              <i class="ri-check-line"></i>
              <i class="ri-delete-bin-6-line"></i>
            </div>
          </div>`);
  });
};

let update = (name) => {
  let tasks = Tasks.find((e) => e.taskName == name);
  updateIndex = Tasks.findIndex((e) => e.taskName == name);
  console.log(updateIndex);
  formContainer.style.display = "flex";
  form[0].value = tasks.taskName;
  form[1].value = tasks.category;
};

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
  };
  if (updateIndex !== null) {
    Tasks[updateIndex] = obj;
    updateIndex = null
  }
  Tasks.push(obj);
  form.reset();

  ui();
  formContainer.style.display = "none";
});
