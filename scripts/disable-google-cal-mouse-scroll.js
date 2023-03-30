// ==UserScript==
// @name     Google Calendar Mouse Wheel Fix
// @version  1
// @grant    none
// @include  https://calendar.google.com/*
// ==/UserScript==

async function getEl() {
  console.log("Checking for element");

  const el = document.querySelector(`[data-mouse-wheel="true"]`);
  if (el) {
    console.log("Found element");
    return el;
  }
  // Wait 1 second and try again
  console.log("Element not found, waiting 1 second");
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

function waait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function go() {
  console.log("GOING!");
  const el = await getEl();
  console.log({ el });
  console.log(Object.keys(el));
  const prop = Object.keys(el).find((key) => key.startsWith(`closure_lm`));
  const closure = el[prop];
  console.log({ prop, el, closure });
  // FF uses DOMMouseScroll, Chrome uses mousewheel
  const eventName = closure.listeners.DOMMouseScroll
    ? "DOMMouseScroll"
    : "mousewheel";
  closure.remove(eventName, closure.listeners[eventName].at(0).listener);
  delete el.dataset.mouseWheel;
}
setTimeout(go, 3000);
