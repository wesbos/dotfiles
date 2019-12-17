module.exports = {
  updateChannel: 'canary',
  config: {
    // default font size in pixels for all tabs
    fontSize: 20,
    windowSize: [1080, 720],
    fontFamily: '"Operator Mono", "Inconsolata for Powerline", monospace',
    cursorShape: 'BLOCK',
    wickedBorder: true,
    padding: '10px',
    shell: '/bin/zsh',
  },


  plugins: [
    'hyperterm-cobalt2-theme',
  ],

  // in development, you can create a directory under
  // `~/.hyperterm_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  // localPlugins: ['hyperterm-cobalt2-theme'],
};
