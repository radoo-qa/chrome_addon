const timeElement = document.getElementById("time");
const weightElement = document.getElementById("weight");

const currentTime = new Date().toLocaleTimeString();
timeElement.textContent = `The time is: ${currentTime}`;

chrome.action.setBadgeText(
  {
    text: "TIME",
  },
  () => {
    console.log("Finised setting badge text.");
  }
);

chrome.storage.sync.get(["weight"], (res) => {
  weightElement.textContent = `Weight is set to: ${res.weight}`;
});
