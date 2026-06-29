let addBtn = document.querySelector("#add-btn");
let formOpen = document.querySelector("#form");
const form = document.querySelector("form");
const closeBtn = document.querySelector(".close");
const transactionStatus = document.querySelector(".transactions-status");
const balanceEl = document.querySelector("#balance");
const incomeEl = document.querySelector("#income");
const expenseEl = document.querySelector("#expense");
const count = document.querySelector("#count");
const searchInput = document.querySelector("#search");
const categoryFilter = document.querySelector("#category-filter");
const resetBtn = document.querySelector("#reset-btn");
const toggle = document.getElementById("toggle");
const nameInput = document.querySelector("#name");
const settingsNameInput = document.querySelector(
  ".preference input[type='text']",
);
const currencySelect = document.querySelector(".preference select");
const saveBtn = document.querySelector("#save-btn");
const logoutBtn = document.querySelector("#logout-btn");
console.log(logoutBtn)

let searchValue = "";
let selectedCategory = "All Types";
let editTransactionId = null;
let chart;

const currencySymbols = {
  "INR (₹)": "₹",
  "USD ($)": "$",
  "EUR (€)": "€",
  "JPY (¥)": "¥",
};

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("date").value = new Date()
    .toISOString()
    .split("T")[0];
});

let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let users = JSON.parse(localStorage.getItem("users")) || [];

// if (!currentUser) {
//   window.location.href = "login.html";
// }

applyTheme();
loadSettings();
renderDashboard();

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("currentUser");

  Swal.fire({
    icon: "success",
    title: "Logged Out",
    text: "Redirecting...",
    timer: 1200,
    showConfirmButton: false,
  });

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1200);
});

function loadSettings() {
  if (nameInput) {
    nameInput.textContent = currentUser.username || "User";
  }

  if (settingsNameInput) {
    settingsNameInput.value = currentUser.username || "";
  }

  if (currencySelect) {
    const savedCurrency = currentUser.currency || "INR (₹)";
    currencySelect.value = savedCurrency;
  }
}

if (currencySelect) {
  currencySelect.addEventListener("change", () => {
    updateSummary();
  });
}

if (saveBtn) {
  saveBtn.addEventListener("click", () => {
    const newName = settingsNameInput ? settingsNameInput.value.trim() : "";
    const newCurrency = currencySelect ? currencySelect.value : "INR (₹)";

    if (newName !== "") {
      currentUser.username = newName;
    }
    currentUser.currency = newCurrency;

    const userIndex = users.findIndex((u) => u.id === currentUser.id);
    if (userIndex !== -1) {
      users[userIndex].username = currentUser.username;
      users[userIndex].currency = currentUser.currency;
    }

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    if (nameInput) {
      nameInput.textContent = currentUser.username;
    }

    updateSummary();

    Swal.fire({
      icon: "success",
      title: "Settings Saved!",
      timer: 1200,
      showConfirmButton: false,
    });
  });
}

toggle.addEventListener("click", () => {
  const userIndex = users.findIndex((u) => u.id === currentUser.id);

  if (currentUser.theme === "light") {
    currentUser.theme = "dark";
    users[userIndex].theme = "dark";
  } else {
    currentUser.theme = "light";
    users[userIndex].theme = "light";
  }

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  applyTheme();
});

function applyTheme() {
  const cards = document.querySelectorAll(".theme-card");
  const texts = document.querySelectorAll(".theme-text");
  const inputs = document.querySelectorAll("input,select");

  if (currentUser.theme === "dark") {
    document.body.style.background = "#020817";

    cards.forEach((card) => {
      card.style.background = "#111827";
      card.style.borderColor = "#374151";
      card.style.color = "white";
    });

    texts.forEach((text) => {
      text.style.color = "#9CA3AF";
    });

    inputs.forEach((input) => {
      input.style.background = "#1F2937";
      input.style.color = "white";
      input.style.borderColor = "#374151";
    });

    toggle.classList.add("active");
  } else {
    document.body.style.background = "";

    cards.forEach((card) => {
      card.style.background = "";
      card.style.borderColor = "";
      card.style.color = "";
    });

    texts.forEach((text) => {
      text.style.color = "";
    });

    inputs.forEach((input) => {
      input.style.background = "";
      input.style.color = "";
      input.style.borderColor = "";
    });

    toggle.classList.remove("active");
  }
}

addBtn.addEventListener("click", () => {
  formOpen.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  formOpen.style.display = "none";
});

searchInput.addEventListener("input", (e) => {
  searchValue = e.target.value.toLowerCase();

  renderDashboard();
});

categoryFilter.addEventListener("change", (e) => {
  selectedCategory = e.target.value;

  renderDashboard();
});

function addTransaction() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let type = e.target[0].value.trim();
    let description = e.target[1].value.trim();
    let amount = e.target[2].value.trim();
    let date = e.target[3].value.trim();
    let category = e.target[4].value.trim();

    if (editTransactionId) {
      const transactionIndex = currentUser.transactions.findIndex(
        (t) => t.id === editTransactionId,
      );

      currentUser.transactions[transactionIndex] = {
        id: editTransactionId,

        type,

        description,

        amount: Number(amount),

        date,

        category,
      };

      const userIndex = users.findIndex((u) => u.id === currentUser.id);

      users[userIndex].transactions = currentUser.transactions;

      localStorage.setItem("users", JSON.stringify(users));

      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      editTransactionId = null;

      form.reset();

      formOpen.style.display = "none";

      renderDashboard();
    } else {
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
    }

    renderDashboard();
  });
}
addTransaction();

function updateChart() {
  let income = 0;
  let expense = 0;

  currentUser.transactions.forEach((transaction) => {
    if (transaction.type === "Income") {
      income += transaction.amount;
    } else {
      expense += transaction.amount;
    }
  });

  const ctx = document.getElementById("expenseChart");

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: "bar",

    data: {
      labels: ["Income", "Expense"],

      datasets: [
        {
          label: "Cash Flow",
          data: [income, expense],
          backgroundColor: ["#22C55E", "#EF4444"],
        },
      ],
    },
  });
}

function renderDashboard() {
  let filteredTransactions = currentUser.transactions;

  if (searchValue !== "") {
    filteredTransactions = filteredTransactions.filter((transaction) => {
      return transaction.description.toLowerCase().includes(searchValue);
    });
  }

  if (selectedCategory === "Income Only") {
    filteredTransactions = filteredTransactions.filter(
      (transaction) => transaction.type === "Income",
    );
  }

  if (selectedCategory === "Expense Only") {
    filteredTransactions = filteredTransactions.filter(
      (transaction) => transaction.type === "Expense",
    );
  }

  transactionStatus.innerHTML = "";

  transactionStatus.innerHTML = "";
  filteredTransactions.forEach((u) => {
    return (transactionStatus.innerHTML += ` <div class="trans p-3 min-w-[480px] flex justify-between text-[15px] sm:text-[14px] border-b border-[#E5E7EB] text-[#6B7280] theme-text font-medium">
                      <p class="text-[14px]">${u.date}</p>
                      <p class="font-semibold">${u.description}</p>
                      <p>${u.category}</p>
                      <p class="font-semibold text-[15px] ${u.type === "Income" ? "text-green-800" : "text-red-800"} ">$${u.amount}.00</p>
                      <div class="actions flex text-[14px] items-center gap-4">
                        <div data-id="${u.id}" class=" edit-btn  p-1 rounded-md cursor-pointer hover:bg-[#DBEAFE] "><i class="fa-solid  fa-pen text-blue-800"></i></div>
                        <div data-id="${u.id}" class=" delete-btn p-1 rounded-md cursor-pointer hover:bg-[#FEE2E2] "><i class="fa-solid fa-trash text-red-800"></i></div>
                      </div>
                      </div>`);
  });
  updateSummary();
  updateChart();
}

transactionStatus.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".delete-btn");

  if (!deleteBtn) return;

  const transactionId = Number(deleteBtn.dataset.id);

  const userIndex = users.findIndex((u) => u.id === currentUser.id);

  users[userIndex].transactions = users[userIndex].transactions.filter(
    (transaction) => transaction.id !== transactionId,
  );

  currentUser.transactions = currentUser.transactions.filter(
    (transaction) => transaction.id !== transactionId,
  );

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  renderDashboard();
});

transactionStatus.addEventListener("click", (e) => {
  const editBtn = e.target.closest(".edit-btn");

  if (!editBtn) return;

  const id = Number(editBtn.dataset.id);

  const transaction = currentUser.transactions.find((t) => t.id === id);

  if (!transaction) return;

  editTransactionId = id;

  formOpen.style.display = "flex";

  form.elements[0].value = transaction.type;
  form.elements[1].value = transaction.description;
  form.elements[2].value = transaction.amount;
  form.elements[3].value = transaction.date;
  form.elements[4].value = transaction.category;
});

function updateSummary() {
  let balance = 0;
  let income = 0;
  let expense = 0;
  let totalTransactions = currentUser.transactions.length;

  currentUser.transactions.forEach((transaction) => {
    if (transaction.type === "Income") {
      income += transaction.amount;
      balance += transaction.amount;
    } else {
      expense += transaction.amount;
      balance -= transaction.amount;
    }
  });

  const selectedCurrency = currencySelect
    ? currencySelect.value
    : currentUser.currency || "INR (₹)";
  const sym = currencySymbols[selectedCurrency] || "₹";

  balanceEl.textContent = `${sym} ${balance.toFixed(2)}`;
  incomeEl.textContent = `${sym} ${income.toFixed(2)}`;
  expenseEl.textContent = `${sym} ${expense.toFixed(2)}`;
  count.textContent = totalTransactions;
}

resetBtn.addEventListener("click", () => {
  Swal.fire({
    title: "Reset All Data?",
    text: "This will delete all your transactions.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#dc2626",
    cancelButtonColor: "#6b7280",
    confirmButtonText: "Yes, Reset",
  }).then((result) => {
    if (!result.isConfirmed) return;

    const userIndex = users.findIndex((u) => u.id === currentUser.id);

    currentUser.transactions = [];

    users[userIndex].transactions = [];

    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    renderDashboard();

    Swal.fire({
      icon: "success",
      title: "Reset Complete",
      timer: 1200,
      showConfirmButton: false,
    });
  });
});
