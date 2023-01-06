// ==UserScript==
// @name     Render.com Status Favicon
// @version  1
// @grant    none
// @include https://dashboard.render.com/*
// @description Shows the curent builds status by overlaying a yellow/green/red/grey dot on top of the favicon
// ==/UserScript==

const colours = {
  progress: '#ffc600', // Building
  live: '#38e88a', // Success!
  failed: '#FF0000', // Failed
  canceled: '#cacaca', // Canceled
  rollback: '#489ff0', // Success, but not the current live site. Rollback-able
};

function getDeployStatus(text) {
  return Object.keys(colours).find((key) => text.includes(key));
}

async function loadImage(img, src) {
  return new Promise((resolve, reject) => {
    img.src = '/favicon.ico';
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}

async function favIcon() {
  const deployHeader = document.querySelector('.deploy-header');
  if (!deployHeader) return;
  const deployStatus = getDeployStatus(deployHeader.innerText.toLowerCase());
  // create a new favicon with canvas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const SIZE = 32;
  const CIRCLE_SIZE = 6;
  canvas.width = SIZE;
  canvas.height = SIZE;
  // Draw old favicon
  const favicon = document.querySelector('link[rel*="icon"]');
  const oldFavicon = new Image();
  await loadImage(oldFavicon, '/favicon.ico');
  ctx.drawImage(oldFavicon, 0, 0, SIZE, SIZE);
  // draw a circle
  ctx.beginPath();
  ctx.arc(SIZE - CIRCLE_SIZE, SIZE - CIRCLE_SIZE, CIRCLE_SIZE, 0, 2 * Math.PI);
  ctx.fillStyle = colours[deployStatus];
  ctx.fill();
  // Update Favicon
  favicon.setAttribute('type', 'image/png');
  favicon.setAttribute('href', canvas.toDataURL('image/png'));
}

setInterval(favIcon, 1000);
