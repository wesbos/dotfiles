/*
To get a list of extensions:

1. Open up your extensions list. `⌘+⇧+x`
2. type in `@enabled`
3. Open VS Code dev toosls `Help` → `Toggle Developer Tools`
4. Paste the code from [get-extensions.js](./get-extensions.js) into the console
5. It will be in your clipboard, so just paste into `vs-code-extensions-i-use.md`

*/

function getExtensions() {
  const extensions = $$('.extensions-list .monaco-list-row').map(function(row) {
    let icon = row.querySelector('.icon').src;
    const title = row.querySelector('span.name').textContent;
    const description = row.querySelector('.description').textContent;
    const id = row.dataset.extensionId;
    if(icon.startsWith('vscode-file')) {
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


const extensions = getExtensions();
const markdown = makeMarkdownTable(extensions);
copy(markdown);
