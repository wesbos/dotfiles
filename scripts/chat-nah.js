// ==UserScript==
// @name     Remove 1 chat
// @version  1
// @grant    none
// @match https://riverside.fm/studio/syntax-fm
// @description removes 1 chat from the chat list
// ==/UserScript==

function clear1Chat() {
  const button = Array.from(document.querySelectorAll('[role="tablist"] button')).filter(
    (button) => button.textContent === "Chat1"
  ).at(0);
  if(button) {
    button.click();
    clearInterval(interval);
    button.parentElement.firstChild.click();
  }
}

let interval = setInterval(clear1Chat, 1000);
