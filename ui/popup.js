changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: applyDarkMode,
    });
});

//main functions
function applyVersion() {
    const manifestData = chrome.runtime.getManifest();
    const VER = manifestData.version

    document.querySelector('.ver').textContent = VER;
}

function applyDarkMode() {

}

applyVersion();