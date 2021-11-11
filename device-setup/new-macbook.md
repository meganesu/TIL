# Setting Up A New MacBook

## The Basics

1. Install Firefox.
    * Make Firefox the default browser.
    * Install the Ecosia add-on.
1. Set up accounts in System Preferences.
1. Connect all calendars to Calendar.
    * Make sure that event notifications are set up for 10 minutes before the event!
1. Turn off "Automatically rearrange Spaces based on most recent use" in System Preferences -> Mission Control.
1. Add hot corner for putting machine to sleep.
1. Change security settings to require password immediately after sleep or screen saver begins.
1. Turn off Handoff (so open browser tabs on phone won't show up in the Dock).
1. Remove Siri from the Touch Bar in System Preferences -> Extensions -> Touch Bar.
1. Download [Obsidian](https://obsidian.md/).
    * Create a GitHub [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with "repo" scope, to access private repos from the command line. (See: [GitHub blog post on token authentication requirements](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/).)
    * Clone second brain. (Use the personal access token you just created as the password to log in through the command line.)

## Programming

1. Set global Git config for name and email:
    ```shell
    git config --global user.name "Megan Sullivan"
    git config --global user.email "my@email.com"
    ```
3. Download VS Code.
    * Install the IntelliJ Keyboard Shortcuts plugin.
    * Set up the CLI:
        ```
        Shell Command: Install 'code' command in PATH
        ```
    * Change auto save setting to "onFocusChange".
1. Install [Oh My Zsh](https://ohmyz.sh/).
1. Install [Homebrew](https://brew.sh/).
    * Install `n`: `brew install n`
3. Install Node.
    * Change npm global install folder path, to get around `Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/netlify-cli'` when trying to globally install packages. [Kevin Hooke blog post](https://www.kevinhooke.com/2018/02/09/fixing-npm-global-install-permissions-on-macos/)
    * ```sh
      mkdir ~/.npm-global
      npm config set prefix '~/.npm-global'
      
      # Add the following line to ~/.zshrc
      export PATH=~/.npm-global/bin:$PATH
      
      source ~/.profile
      
      # Now you should be able to globally install packages without issues
      npm install -g netlify-cli
      ```
