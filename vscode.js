{
  "editor.fontFamily": "operator Mono, Menlo, Monaco, 'Courier New', monospace",
  "editor.fontSize": 29,
  "editor.quickSuggestionsDelay": 30,
  "editor.letterSpacing": 0.5,
  "workbench.editor.tabSizing": "shrink",
  "html.format.enable": true,
  "html.format.preserveNewLines": true,
  "files.trimTrailingWhitespace": true,
  "editor.tabSize": 2,
  "editor.cursorWidth": 5,
  "editor.wordWrap": "on",
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.fontWeight": "400",
  "editor.cursorBlinking": "solid",
  "editor.colorDecorators": false,
  "editor.minimap.enabled": false,
  "workbench.activityBar.visible": false,
  // "workbench.colorCustomizations": {
  //   "window.activeBorder": "#fe2c70",
  //   "window.inactiveBorder": "#ffc600",
  // },
  "editor.renderWhitespace": "none",
  "editor.rulers": [
    80,
    100
  ],
  "editor.minimap.showSlider": "always",
  "workbench.startupEditor": "newUntitledFile",
  "extensions.ignoreRecommendations": false,
  "files.exclude": {
    "**/.cache": true,
    "**/.DS_Store": true,
    "**/.git": true,
    "**/.hg": true,
    "**/.next": true,
    "**/.svn": true,
    "**/CVS": true,
    "**/dist": true
  },
  "workbench.colorTheme": "Cobalt2",
  "workbench.editor.tabCloseButton": "off",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
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
    "Updateability",
    "backend",
    "camo",
    "cloudinary",
    "destructure",
    "frontmatter",
    "gmail",
    "injectable",
    "keystonejs",
    "lightgrey",
    "minmax",
    "prefetch",
    "promisify",
    "refetch",
    "rerender",
    "slicemasters",
    "subgrid",
    "unnesssecary",
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
  "editor.parameterHints.enabled": false,
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "editor.fontLigatures": true,
  "workbench.tree.indent": 20,
  "polacode.shadow": "rgba(0, 0, 0, 0.55) 0px 0 0",
  "polacode.transparentBackground": true,
  "polacode.target": "snippet",
  "terminal.integrated.shell.osx": "/bin/zsh",
  "terminal.integrated.fontSize": 20,
  "editor.lineHeight": 45,
  "window.zoomLevel": -1,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsserver.log": "verbose",
  "propTypes.autoImport": "ES6",
  "editor.suggest.insertMode": "replace",
  "kite.showWelcomeNotificationOnStartup": false,
  "liveshare.featureSet": "stable"
}
