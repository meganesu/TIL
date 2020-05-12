# Pull Changes from Upstream into Fork

```
// Add a new remote for the original repo you forked (called "upstream" here)
$ git remote add upstream <URL of upstream repo>

// Get the changes to the original repo
$ git fetch upstream

// Apply changes from original repo to your fork (do on master)
$ git rebase upstream/master
```
