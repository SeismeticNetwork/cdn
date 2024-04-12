var scriptElement = document.createElement('script');
scriptElement.src = 'https://raw.githubusercontent.com/Vencord/builds/main/browser.js';
var linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = 'https://raw.githubusercontent.com/Vencord/builds/main/browser.css';
document.head.appendChild(scriptElement);
document.head.appendChild(linkElement);
