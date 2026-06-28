let addBtn = document.querySelector("#add-btn");
let formOpen = document.querySelector("#form");
const form = document.querySelector("form");
const closeBtn = document.querySelector(".close");
const transactionStatus = document.querySelector(".transactions-status");

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("date").value = new Date()
    .toISOString()
    .split("T")[0];
});

let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let users = JSON.parse(localStorage.getItem("users")) || [];

renderDashboard();

addBtn.addEventListener("click", () => {
  formOpen.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  formOpen.style.display = "none";
});

function addTransaction() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let type = e.target[0].value.trim();
    let description = e.target[1].value.trim();
    let amount = e.target[2].value.trim();
    let date = e.target[3].value.trim();
    let category = e.target[4].value.trim();

    let obj = {
      id: Date.now(),
      type,
      description,
      amount: Number(amount),
      date,
      category,
    };

    const userIndex = users.findIndex((u) => u.id === currentUser.id);

    users[userIndex].transactions.push(obj);

    currentUser.transactions.push(obj);

    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    e.target[4].value = "";

    formOpen.style.display = "none";
    renderDashboard();
  });
}
addTransaction();

function renderDashboard() {
  transactionStatus.innerHTML = "";
  currentUser.transactions.forEach((u) => {
    return (transactionStatus.innerHTML += ` <div class="trans p-3 flex border-b border-[#E5E7EB] justify-between items-start text-[13px]">
                      <p class="text-[14px]">${u.date}</p>
                      <p class="font-semibold">${u.description}</p>
                      <p>${u.category}</p>
                      <p class="font-semibold text-[15px] ${u.type === "Income" ? "text-green-800" : "text-red-800"} ">${u.amount}.00</p>
                      <div class="actions flex text-[14px] items-center gap-4">
                        <div class=" p-1 rounded-md cursor-pointer hover:bg-[#DBEAFE] "><i class="fa-solid  fa-pen text-blue-800"></i></div>
                        <div class=" p-1 rounded-md cursor-pointer hover:bg-[#FEE2E2] "><i class="fa-solid fa-trash text-red-800"></i></div>
                      </div>
                      </div>`);
  });
}

const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
});
