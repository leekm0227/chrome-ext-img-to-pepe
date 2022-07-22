const btnToggle = document.getElementById("toggle");
const btnReset = document.getElementById("reset")

btnToggle.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { type: "toggle" }, function (response) {
            btnToggle.innerHTML = response;
        });
    });
});

btnReset.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { type: "reset" }, function (response) {
            console.log(response);
        });
    });
});