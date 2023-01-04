# Fig pre block. Keep at the top of this file.
[[ -f "$HOME/.fig/shell/zshrc.pre.zsh" ]] && builtin source "$HOME/.fig/shell/zshrc.pre.zsh"
# Path to your oh-my-zsh configuration.
ZSH=$HOME/.oh-my-zsh
ZSH_THEME="cobalt2"
# ZSH_THEME="cobalt2-minimal"
#alias ll="ls -l"
alias zs="source ~/.zshrc"
alias gum="git pull upstream master"
alias c="code ."
alias rm="trash"

# Changed your .gitignore _after_ you have added / committed some files?
# run `gri` to untrack anything in your updated .gitignore
# Put this in your .zshrc file
alias gri="git ls-files --ignored --exclude-standard | xargs -0 git rm -r"

alias nodetypes="npm install --save @types/node$(node --version | cut -d'.' -f1 | sed 's/v/@^/')"

# Open all merge conflicts or currently changed files in VS Code
# Switch out `code` for `subl`, `vim`, `atom` or your editor's CLI
alias fix="git diff --name-only | uniq | xargs code"

function openall() {
  for folder in */; do code $folder && hyper $folder; done
}

function touchh() {
  mkdir -p "$(dirname "$1")" && touch "$1"
}

function takee() {
  mkdir -p "$(dirname "$1")" && touch "$1" && take "$(dirname "$1")"
}

# alias 🖕😏🖕="git push --force"

alias "git latest"="git for-each-ref --sort=-committerdate refs/heads/"

#  Uses tree - install first:
# brew install tree
function t() {
  # Defaults to 3 levels deep, do more with `t 5` or `t 1`
  # pass additional args after
  tree -I '.git|node_modules|.DS_Store' --dirsfirst --filelimit 15 -L ${1:-3} -aC $2
}

# red dots to be displayed while waiting for completion
COMPLETION_WAITING_DOTS="true"

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
plugins=(git cloudapp node npm wd brew osx extract z zsh-syntax-highlighting zsh-autosuggestions dirnav)

source $ZSH/oh-my-zsh.sh


function zource(){
  source ~/.zshrc && -
}

set-window-title() {
  window_title="\e]0;${${PWD/#"$HOME"/~}/Dropbox\//}\a"
  echo -ne "$window_title"
}

function dl() {
  folder=$(echo "$1" | sed -e 's/.*\///g')
  svn checkout ${1:gs/tree\/master/trunk}
  rm -rf "./$folder/.svn"
}

PR_TITLEBAR=''
set-window-title
add-zsh-hook precmd set-window-title

export DENO_INSTALL="/Users/wesbos/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"

alias dev="npm run dev"

export FLYCTL_INSTALL="/Users/wesbos/.fly"
export PATH="$FLYCTL_INSTALL/bin:$PATH"


if [[ $TERM_PROGRAM != "WarpTerminal" ]]; then
##### WHAT YOU WANT TO DISABLE FOR WARP - BELOW

# POWERLEVEL10K
# OH-MY-ZSH-THEMES
# OH-MY-ZSH-PLUGINS
# FIG
# BIND keys like:
# bindkey "^j" down-line-or-beginning-search
# [[ -r "/usr/local/etc/profile.d/bash_completion.sh" ]] &&
# . "/usr/local/etc/profile.d/bash_completion.sh"
# eval "$(rbenv init -)"

##### WHAT YOU WANT TO DISABLE FOR WARP - ABOVE
fi

# bun completions
[ -s "/Users/wesbos/.bun/_bun" ] && source "/Users/wesbos/.bun/_bun"

# bun
export BUN_INSTALL="/Users/wesbos/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

# bun
export BUN_INSTALL="/Users/wesbos/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

# Fig post block. Keep at the bottom of this file.
[[ -f "$HOME/.fig/shell/zshrc.post.zsh" ]] && builtin source "$HOME/.fig/shell/zshrc.post.zsh"
