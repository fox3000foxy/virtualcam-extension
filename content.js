const script = document.createElement('script');
script.src = chrome.runtime.getURL('inject-gum.js');
(document.head || document.documentElement).appendChild(script);