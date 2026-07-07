(function () {
  const STORAGE_KEY = "daily-goals-list";

  const goalInput = document.getElementById("goalInput");
  const addBtn = document.getElementById("addBtn");
  const goalsList = document.getElementById("goalsList");
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");
  const goalsEmptyState = document.getElementById("emptyState");
  const backToDashboard = document.getElementById("back");
  const homeContainer = document.getElementById("home-container");
  const goalPage = document.getElementById("goals-page");



  if (!goalInput || !addBtn || !goalsList) return;

  function loadGoals() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveGoals(goals) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
    } catch (e) {
      console.error("Could not save goals", e);
    }
  }

  let goals = loadGoals();

  function render() {
    goalsList.innerHTML = "";

    if (goals.length === 0) {
      goalsEmptyState.classList.remove("hidden");
    } else {
      goalsEmptyState.classList.add("hidden");
    }

    goals.forEach((goal) => {
      const card = document.createElement("div");
      card.className =
        "goal-card fade-in flex items-center gap-3 bg-[#0d1219] border border-white/10 rounded-xl px-4 sm:px-5 py-3.5";

      const checkbox = document.createElement("button");
      checkbox.className = `checkbox-circle shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs ${
        goal.done
          ? "bg-emerald-400 text-[#0d1219]"
          : "border-2 border-white/25 text-transparent hover:border-white/40"
      }`;
      checkbox.innerHTML = goal.done ? "&#10003;" : "";
      checkbox.onclick = () => toggleGoal(goal.id);

      const text = document.createElement("span");
      text.className = `flex-1 text-sm sm:text-base ${goal.done ? "strike" : "text-slate-200"}`;
      text.textContent = goal.text;

      const deleteBtn = document.createElement("button");
      deleteBtn.className =
        "shrink-0 text-slate-500 hover:text-slate-300 text-lg leading-none px-1 transition-colors";
      deleteBtn.innerHTML = "&times;";
      deleteBtn.onclick = () => deleteGoal(goal.id);

      card.appendChild(checkbox);
      card.appendChild(text);
      card.appendChild(deleteBtn);
      goalsList.appendChild(card);
    });

    updateProgress();
  }

  function updateProgress() {
    const total = goals.length;
    const done = goals.filter((g) => g.done).length;
    const pct = total === 0 ? 0 : (done / total) * 100;
    progressBar.style.width = pct + "%";
    progressText.textContent = `${done} of ${total} completed`;
  }

  function addGoal() {
    const value = goalInput.value.trim();
    if (!value) return;
    goals.push({ id: Date.now().toString(), text: value, done: false });
    goalInput.value = "";
    saveGoals(goals);
    render();
  }

  function toggleGoal(id) {
    goals = goals.map((g) => (g.id === id ? { ...g, done: !g.done } : g));
    saveGoals(goals);
    render();
  }

  function deleteGoal(id) {
    goals = goals.filter((g) => g.id !== id);
    saveGoals(goals);
    render();
  }

  addBtn.addEventListener("click", addGoal);
  goalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addGoal();
  });

  render();
})();
