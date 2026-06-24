const clock = document.querySelector(".clock");

function updateClock() {
  const date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let amPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  clock.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
}

updateClock();

setInterval(updateClock, 1000);