const timeElement = document.getElementById("time");
const timerElement = document.getElementById("timer");

function updateTimeElement() {
  chrome.storage.local.get(["timer"], (res) => {
    const timer = res.timer ?? 0;
    timerElement.textContent = `The timer is at: ${timer} sec`;
  });

  const currentTime = new Date().toLocaleTimeString();
  timeElement.textContent = `The time is: ${currentTime}`;
}

updateTimeElement();
setInterval(updateTimeElement, 1000);

const startBtn = document.getElementById("start-timer");
const stopBtn = document.getElementById("stop-timer");
const resetBtn = document.getElementById("reset-timer");

startBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: true,
  });
});

stopBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: false,
  });
});

resetBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    timer: 0,
    isRunning: false,
  });
});
