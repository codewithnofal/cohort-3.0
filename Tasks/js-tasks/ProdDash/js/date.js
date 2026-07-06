const currentDate = document.querySelector("#current-date");
const currentDay = document.querySelector("#current-day");

function updateDate() {
  const today = new Date();

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  currentDate.textContent = today.toLocaleDateString("en-GB", options);

  currentDay.textContent = today.toLocaleDateString("en-GB", {
    weekday: "long",
  });
}

updateDate();
