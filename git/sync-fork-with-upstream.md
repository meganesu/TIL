# Working with Forks

## Pull Changes from Upstream into Fork

```sh
# Add a new remote for the original repo you forked (called "upstream" here)
git remote add upstream <URL of upstream repo>

# Get the changes to the original repo
git fetch upstream

# Apply changes from original repo to your fork (do on master)
git rebase upstream/master
```

## Force Fork to Match Upstream

```sh
# ensures current branch is master
git checkout master

# pulls all new commits made to upstream/master
git pull upstream master

# this will delete all your local changes to master
git reset --hard upstream/master

# take care, this will delete all your changes on your forked master
git push origin master --force
```
