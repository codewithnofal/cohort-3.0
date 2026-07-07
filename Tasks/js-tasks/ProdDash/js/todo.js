
(function () {
  const STORAGE_KEY = 'task-list-items';

  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');
  const taskEmptyState = document.getElementById('taskEmptyState');

  if (!taskInput || !addTaskBtn || !taskList) return;

  function loadTasks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveTasks(tasks) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (e) {
      console.error('Could not save tasks', e);
    }
  }

  let tasks = loadTasks();

  function render() {
    taskList.innerHTML = '';

    if (tasks.length === 0) {
      taskEmptyState.classList.remove('hidden');
    } else {
      taskEmptyState.classList.add('hidden');
    }

    
    const sorted = [...tasks].sort((a, b) => (b.starred === a.starred ? 0 : b.starred ? 1 : -1));

    sorted.forEach((task) => {
      const card = document.createElement('div');
      card.className = `task-card fade-in flex items-center gap-3 bg-[#0d1219] border border-white/10 rounded-xl px-4 sm:px-5 py-3.5 ${task.starred ? 'starred' : ''}`;

      const checkbox = document.createElement('button');
      checkbox.className = `checkbox-circle shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs ${
        task.done
          ? 'bg-emerald-400 text-[#0d1219]'
          : 'border-2 border-white/25 text-transparent hover:border-white/40'
      }`;
      checkbox.innerHTML = task.done ? '&#10003;' : '';
      checkbox.onclick = () => toggleDone(task.id);

      const text = document.createElement('span');
      text.className = `flex-1 text-sm sm:text-base ${task.done ? 'strike' : 'text-slate-200'}`;
      text.textContent = task.text;

      const starBtn = document.createElement('button');
      starBtn.className = `star-btn shrink-0 text-lg leading-none px-1 ${task.starred ? 'filled' : ''}`;
      starBtn.innerHTML = '&#9733;';
      starBtn.title = 'Mark as important';
      starBtn.onclick = () => toggleStar(task.id);

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'shrink-0 text-slate-500 hover:text-slate-300 text-lg leading-none px-1 transition-colors';
      deleteBtn.innerHTML = '&times;';
      deleteBtn.onclick = () => deleteTask(task.id);

      card.appendChild(checkbox);
      card.appendChild(text);
      card.appendChild(starBtn);
      card.appendChild(deleteBtn);
      taskList.appendChild(card);
    });
  }

  function addTask() {
    const value = taskInput.value.trim();
    if (!value) return;
    tasks.push({ id: Date.now().toString(), text: value, done: false, starred: false });
    taskInput.value = '';
    saveTasks(tasks);
    render();
  }

  function toggleDone(id) {
    tasks = tasks.map(t => t.id === id ? { ...t, done: !t.done } : t);
    saveTasks(tasks);
    render();
  }

  function toggleStar(id) {
    tasks = tasks.map(t => t.id === id ? { ...t, starred: !t.starred } : t);
    saveTasks(tasks);
    render();
  }

  function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks(tasks);
    render();
  }

  addTaskBtn.addEventListener('click', addTask);
  taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
  });

  render();
})();