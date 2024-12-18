document.getElementById('menu-btn').addEventListener('click', () => {
  const dropdown = document.getElementById('dropdown-menu');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener("DOMContentLoaded", function () {
  // Set the target date to 5 days from now
  const targetDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000;

  function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      // Timer expired, set all to 00
      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
      clearInterval(timerInterval);
      return;
    }

    // Calculate time components
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the DOM with leading zeros
    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  }

  // Update the timer every second
  const timerInterval = setInterval(updateTimer, 1000);

  // Initialize timer on page load
  updateTimer();
});

// Function to handle tab switching
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove 'active' class from all tabs and contents
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add 'active' class to clicked tab and corresponding content
    tab.classList.add('active');
    const contentId = tab.id.replace('-tab', '-content');
    document.getElementById(contentId).classList.add('active');
  });
});

// Set the default active tab to "All Categories"
document.getElementById('all-tab').classList.add('active');
document.getElementById('all-content').classList.add('active');

