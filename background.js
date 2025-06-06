chrome.runtime.onInstalled.addListener(() => {
    console.log('Virtual Camera for Chrome extension installed.');
});

chrome.runtime.onStartup.addListener(() => {
    console.log('Virtual Camera for Chrome extension started.');
});

// Il ne reste que le handler pour le clic sur l'icône de l'extension
chrome.action.onClicked.addListener((tab) => {
    try {
        const url = new URL(tab.url);
        // Crée une URL sur le même domaine
        const popupUrl = `${url.origin}/virtual-camera-interface`;
        chrome.windows.create({
            url: popupUrl,
            type: "popup",
            width: 600,
            height: 800
        });
    } catch (e) {
        // Si l'URL n'est pas valide (ex: chrome://), fallback sur un nouvel onglet
        chrome.tabs.create({ url: "https://example.com/virtual-camera-interface" });
    }
});