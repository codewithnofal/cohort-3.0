const greeting = document.querySelector("#greeting");
const greetingMessage = document.querySelector("#greeting-message");

function updateGreeting() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    greeting.textContent = "Good Morning, ☀️";
    greetingMessage.textContent =
      "Rise and shine! Let's make today productive.";
  } else if (hour >= 12 && hour < 17) {
    greeting.textContent = "Good Afternoon, 🌤";
    greetingMessage.textContent = "Keep pushing! You're doing great.";
  } else if (hour >= 17 && hour < 20) {
    greeting.textContent = "Good Evening, 🌇";
    greetingMessage.textContent = "Stay focused. Finish what you started.";
  } else {
    greeting.textContent = "Good Night, 🌙";
    greetingMessage.textContent = "Wrap up your day and prepare for tomorrow.";
  }
}
updateGreeting();
