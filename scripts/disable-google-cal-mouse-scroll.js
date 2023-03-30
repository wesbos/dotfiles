// ==UserScript==
// @name     Google Calendar Mouse Wheel Fix
// @version  1
// @grant    none
// @description  Disables the mouse wheel scrolling on Google Calendar
// @include  https://calendar.google.com/*
// ==/UserScript==

async function go() {

  async function getEl() {
    const el = document.querySelector(`[data-mouse-wheel="true"]`);
    if (el) {
      return el;
    }
    // Wait 1 second and try again
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return getEl();
  }

  const el = await getEl();
  const prop = Object.keys(el).find((key) => key.startsWith(`closure_lm`));
  const closure = el[prop];
  // FF uses DOMMouseScroll, Chrome uses mousewheel
  const eventName = closure.listeners.DOMMouseScroll
    ? "DOMMouseScroll"
    : "mousewheel";
  closure.remove(eventName, closure.listeners[eventName].at(0).listener);
  delete el.dataset.mouseWheel;
}

// Firefox doesnt give you access to Object.keys in the page context, so we have to inject the script.
function inject() {
  const script = document.createElement("script");
  script.textContent = `(${go.toString()})();`;
  document.body.appendChild(script);
}

setTimeout(inject, 1000);
