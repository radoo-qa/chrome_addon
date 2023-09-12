console.log("Extension is working");
const weightInput = document.getElementById("weight-input");
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", () => {
  const weight = weightInput.value;
  chrome.storage.sync.set(
    {
      weight,
    },
    () => {
      console.log(`Weight is set to ${weight}`);
    }
  );
});

chrome.storage.sync.get(["weight"], (res) => {
  weightInput.value = res.weight;
});
