
(function () {
  const STORAGE_KEY = 'daily-planner-entries';

  const plannerList = document.getElementById('plannerList');
  if (!plannerList) return;

  function loadEntries() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveEntries(entries) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch (e) {
      console.error('Could not save planner entries', e);
    }
  }

  let entries = loadEntries();

  function formatHour(hour) {
    const period = hour < 12 ? 'AM' : 'PM';
    let displayHour = hour % 12;
    if (displayHour === 0) displayHour = 12;
    return `${displayHour}:00 ${period}`;
  }

  function buildRows() {
    plannerList.innerHTML = '';
    for (let hour = 0; hour < 24; hour++) {
      const row = document.createElement('div');
      row.className = 'planner-row';
      row.dataset.hour = hour;

      const timeLabel = document.createElement('p');
      timeLabel.className = 'planner-time mono';
      timeLabel.textContent = formatHour(hour);

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'planner-input';
      input.placeholder = 'Nothing planned';
      input.value = entries[hour] || '';

      input.addEventListener('input', () => {
        entries[hour] = input.value;
        saveEntries(entries);
      });

      row.appendChild(timeLabel);
      row.appendChild(input);
      plannerList.appendChild(row);
    }
  }

  function highlightCurrentHour() {
    const currentHour = new Date().getHours();
    document.querySelectorAll('.planner-row').forEach((row) => {
      row.classList.toggle('current-hour', Number(row.dataset.hour) === currentHour);
    });
  }

  buildRows();
  highlightCurrentHour();

  setInterval(highlightCurrentHour, 60 * 1000);
})();