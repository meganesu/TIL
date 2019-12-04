# Git Hooks

Git hooks let you run extra scripts before or after running a git command. They live in the `.git/hooks` directory. When you initialize a git repo, that directory will come pre-populated with some sample hook scripts.

## Creating a Git Hook Script

1. Create a file in the `.git/hooks` directory. This file should have a name that matches one of the existing git hooks. See [Customizing Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) for a full list of available hooks.
1. Run `chmod +x` to make the file executable. Without this step, you won't actually be able to run your hook script.

These files won't be committed as part of your repo, so keep that in mind.