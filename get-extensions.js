/*
To get a list of extensions:

1. Open up your extensions list. `⌘+⇧+x`
2. type in `@enabled`
3. Open VS Code dev toosls `Help` → `Toggle Developer Tools`
4. Paste the code from [get-extensions.js](./get-extensions.js) into the console
5. You have 10 seconds to scroll your extension list to gather them all. This is weird, but VS code uses virtual scrolling so they are only added to the dom when visible.
5. run copy(markdown), and paste into `vs-code-extensions-i-use.md`

*/

async function getExtensions() {
  // VS Code uses Virtual scrolling, so we need to get them all
  // I cannot find where in memory, or how to query a list of @enabled
  // This is janky AF dont judge me

  // zoom out
  vscode.webFrame.setZoomLevel(-10);
  const seconds = 5;
  console.log(`You have ${seconds} seconds to scroll your list up and down as much as possible!`);
  const allExtensions = [];

  const interval = setInterval(function() {
    allExtensions.push(...getVisibleExtensions());
    console.log('KEEP SCROLLING!');
  }, 300);

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('PHEW DONE!');
      clearInterval(interval);
      vscode.webFrame.setZoomLevel(-1);
      console.log(allExtensions.length, 'captured');
      const unique = uniqueBy(allExtensions, 'id');
      console.log(unique.length, 'unique');
      resolve(unique)
    }, seconds * 1000);
  });

}

function getVisibleExtensions() {
  const extensions = Array.from(document.querySelectorAll('.extensions-list .monaco-list-row')).map(function (row) {
    let icon = row.querySelector('.icon').src;
    const title = row.querySelector('span.name').textContent;
    const description = row.querySelector('.description').textContent;
    const id = row.dataset.extensionId;
    if (icon.startsWith('vscode-file')) {
      icon = `https://cdn.vsassets.io/v/M213_20221206.3/_content/Header/default_icon_128.png`;
    }

    return {
      icon,
      title,
      description,
      id
    }
  });
  return extensions;
}

function makeLink(id) {
  return `https://marketplace.visualstudio.com/items?itemName=${id}`
}

function makeMarkdownTable(extensions) {
  const rows = extensions.map(extension => {
    return `| <a href="${makeLink(extension.id)}"><img width="100" src="${extension.icon}" alt="${extension.title}"> | <h3><a href="${makeLink(extension.id)}">${extension.title}</a></h3>${extension.description} |`
  });

  const markdownTable =  `Here are a list of all the extensions I use. This is an ever-changing setup, so if you saw me use something in a video or screenshot, it might be in this list!

| ×××××× |  |
| --- | --- |
${rows.join(`\n`)}
`
  return markdownTable;
}

function uniqueBy(arr, key) {
  let seen = new Set()

  return arr.filter(it => {
    let val = it[key]
    if (seen.has(val)) {
      return false
    } else {
      seen.add(val)
      return true
    }
  })
}


const extensions = await getExtensions();
console.info(extensions.length, 'Found!');
const markdown = makeMarkdownTable(extensions);
console.info('please run copy(markdown) to get the markdown in your clipboard')
