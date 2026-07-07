
(function () {
  const startBtn = document.getElementById('startBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const resetBtn = document.getElementById('resetBtn');
  const timeDisplay = document.getElementById('timeDisplay');
  const sessionLabel = document.getElementById('sessionLabel');
  const ringProgress = document.getElementById('ringProgress');
  const presetChips = document.querySelectorAll('.preset-chip');

  if (!startBtn || !timeDisplay) return;

  const CIRCUMFERENCE = 565.48;

  const modes = {
    work: { label: 'WORK SESSION', minutes: 25 },
    short: { label: 'SHORT BREAK', minutes: 5 },
    long: { label: 'LONG BREAK', minutes: 15 },
  };

  let currentMode = 'work';
  let totalSeconds = modes[currentMode].minutes * 60;
  let secondsLeft = totalSeconds;
  let timerInterval = null;
  let isRunning = false;

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  function updateDisplay() {
    timeDisplay.textContent = formatTime(secondsLeft);
    const progressFraction = secondsLeft / totalSeconds;
    const offset = CIRCUMFERENCE * (1 - progressFraction);
    ringProgress.style.strokeDashoffset = offset;
  }

  function setMode(mode) {
    currentMode = mode;
    totalSeconds = modes[mode].minutes * 60;
    secondsLeft = totalSeconds;
    sessionLabel.textContent = modes[mode].label;
    stopTimer();
    updateDisplay();

    presetChips.forEach((chip) => {
      chip.classList.toggle('active-chip', chip.dataset.mode === mode);
    });
  }

  function tick() {
    if (secondsLeft <= 0) {
      stopTimer();
      return;
    }
    secondsLeft -= 1;
    updateDisplay();
    if (secondsLeft <= 0) {
      stopTimer();
    }
  }

  function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timerInterval = setInterval(tick, 1000);
  }

  function stopTimer() {
    isRunning = false;
    clearInterval(timerInterval);
    timerInterval = null;
  }

  function resetTimer() {
    stopTimer();
    secondsLeft = totalSeconds;
    updateDisplay();
  }

  startBtn.addEventListener('click', startTimer);
  pauseBtn.addEventListener('click', stopTimer);
  resetBtn.addEventListener('click', resetTimer);

  presetChips.forEach((chip) => {
    chip.addEventListener('click', () => setMode(chip.dataset.mode));
  });

  updateDisplay();
})();