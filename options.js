console.log("Extension is working");
const timeInput = document.getElementById("time-input");
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", () => {
  const notificationTime = timeInput.value;
  chrome.storage.sync.set({
    notificationTime,
  });
});

// time from storage to input placeholder
chrome.storage.sync.get(["notificationTime"]).then((result) => {
  timeInput.value = result.notificationTime ?? 1000;
});
