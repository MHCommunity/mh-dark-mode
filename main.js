function doc(clss, isAll) {
    if (isAll) {
        const el = document.querySelectorAll(clss);
        return el;
    }
    else {
        const el = document.querySelector(clss);
        return el || { style: {} };
    }
}

const manifestData = chrome.runtime.getManifest();
const VER = manifestData.version

console.log('MouseHunt Dark Mode ' + VER + ' applied.');
