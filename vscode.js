{
  "editor.fontFamily": "Operator Mono, Menlo, Monaco, 'Courier New', monospace",
  "editor.fontSize": 29,
  "editor.lineHeight": 45,
  "editor.quickSuggestionsDelay": 30,
  "editor.letterSpacing": 0.5,
  "workbench.editor.tabSizing": "shrink",
  "html.format.enable": true,
  "html.format.preserveNewLines": true,
  "files.trimTrailingWhitespace": true,
  "editor.tabSize": 2,
  "editor.cursorWidth": 5,
  // this isn't really underline but we hack it to be a thicker cursor
  "editor.cursorStyle": "line",
  "editor.wordWrap": "on",
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.fontWeight": "400",
  "editor.cursorBlinking": "solid",
  "editor.colorDecorators": false,
  "editor.minimap.enabled": false,
  "vscode_custom_css.imports": [
    "/Volumes/Macintosh HD/Users/wesbos/.vscodestyles.css"
  ],
  "workbench.activityBar.visible": false,
  "workbench.sideBar.location": "left",
  "editor.renderWhitespace": "none",
  "editor.rulers": [
    80,
    100
  ],
  "editor.minimap.showSlider": "always",
  "workbench.startupEditor": "newUntitledFile",
  "extensions.ignoreRecommendations": false,
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/.next": true
  },
  "workbench.colorTheme": "Cobalt2",
  "workbench.editor.tabCloseButton": "off",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  // show snippets before any other auto completion
  "editor.snippetSuggestions": "top",
  // this lets you quick open multiple items in a row and now have the previous ones closed on you
  "workbench.editor.enablePreviewFromQuickOpen": false,
  "window.title": "${dirty} ${activeEditorMedium}${separator}${rootName}",
  "sublimeTextKeymap.promptV3Features": true,
  // These are all my auto-save configs
  "editor.formatOnSave": true,
  // turn it off for JS
  "[javascript]": {
    "editor.formatOnSave": false
  },
  // tell the ESLint plugin to run on save
  "eslint.autoFixOnSave": true,
  // Optional: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
  "prettier.disableLanguages": [
    "js"
  ],
  "eslint.alwaysShowStatus": true,
  "cSpell.userWords": [
    "SIGNUP",
    "Signin",
    "Signout",
    "TLDR",
    "Templating",
    "backend",
    "camo",
    "destructure",
    "gmail",
    "injectable",
    "lightgrey",
    "minmax",
    "prefetch",
    "promisify",
    "refetch",
    "wesbos"
  ],
  "editor.autoIndent": true,
  "window.closeWhenEmpty": true,
  "editor.detectIndentation": false,
  "files.insertFinalNewline": true,
  "editor.showFoldingControls": "always",
  "editor.find.seedSearchStringFromSelection": true,
  "editor.matchBrackets": true,
  "window.openFilesInNewWindow": "off",
  "workbench.editor.enablePreview": true,
  "editor.scrollBeyondLastLine": true,
  "editor.useTabStops": true,
  "editor.formatOnPaste": true,
  "[jade]": {
    "togglequotes.chars": [
      "\"",
      "'",
      "`"
    ]
  },
  "window.zoomLevel": 0,
  "editor.parameterHints.enabled": false
}
