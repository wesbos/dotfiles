// ==UserScript==
// @name     Let Scott Into Riverside!
// @version  1
// @grant    none
// @match https://riverside.fm/studio/syntax-fm
// @description Clicks the admit button for Scott Tolinski when he joins the Riverside waiting room
// ==/UserScript==

function letScottIn() {
  const admitButton = Array
    .from(document.querySelectorAll(".waiting-room-content > *"))
    .filter((div) => div.innerText.includes("Scott Tolinski"))
    .map((div) =>
      Array.from(div.querySelectorAll("button")).find(
        (button) => button.innerText === "Admit"
      )
    )
    .at(0);

  if (admitButton) {
    admitButton.click();
    clearInterval(interval);
    // We continue to run it after 10 seconds in case he needs to refresh
    setTimeout(() => {
      interval = setInterval(letScottIn, 1000);
    }, 10000);
  }
}

// Note - I'm not using MutationObserver here, because we would need to run a timeout to wait for the .waiting-room-content to be added to the DOM anyways, so it's essentially the same thing since an empty querySelectorAll will wont run
let interval = setInterval(letScottIn, 1000);

// Example HTML
// const html = /* html */ `
// <div class="waiting-room-content w-full flex-shrink-0 css-6c3da6">
//   <div class="text-ivory text-sm flex px-4 py-4 justify-between items-center">
//     <span class="capitalize">Scott Tolinski</span>
//     <div class="flex items-center">
//       <button class="text-mediumGrey px-3 py-1 cursor-pointer text-xs font-medium hover:text-white">
//         Remove
//       </button>
//       <button class="text-ivory text-xs  bg-peacock px-3 py-1  font-medium ml-1 rounded-md hover:bg-peacockHover hover:text-white" onClick="alert('it worked')">
//         Admit
//       </button>
//     </div>
//   </div>
// </div>
// `;
