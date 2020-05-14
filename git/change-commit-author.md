# Change the Author of a Commit

```
git rebase -i <earlier commit>

git commit --amend --author="Megan Sullivan <email>"

git rebase --continue

// After changing author on all the necessary commits, push the changes to remote
git push --force
```

https://stackoverflow.com/questions/3042437/how-to-change-the-commit-author-for-one-specific-commit
