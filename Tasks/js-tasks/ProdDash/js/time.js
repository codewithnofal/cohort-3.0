const currentTime = document.getElementById("current-time");

function updateTime() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let period = "AM";

  if (hours >= 12) {
    period = "PM";
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  if (hours === 0) {
    hours = 12;
  }

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${period}`;

  currentTime.textContent = formattedTime;
}

updateTime();

setInterval(updateTime, 1000);
