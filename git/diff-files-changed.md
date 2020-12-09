# Get a list of files that have changed between two commits

```shell
git diff --stat abc123 xyz123  # where abc123 and xyz123 are SHA1 hashes of commit objects
```

## Goal:

Show all the files changed between two commits.

## Context:

Used this to programmatically create redirects when we reorganized the Gatsby docs. We rearranged the folder structure, which changed URL paths. For SEO (and in case folks had old bookmarks), we wanted to set up redirects to automatically send people from the old URL to the new one.


## Resources

* [git: show all files changed between two commits (Stack Overflow)](https://stackoverflow.com/questions/3144647/git-show-all-files-changed-between-two-commits)
