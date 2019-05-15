# `git add -p` options

When you want to stage changes, you can use `git add -p` to stage one chunk of code at a time. This lets you make sure you're only adding changes you actually want to include in your commit.

When you use `-p`, you get a number of commands that you can use to specify how you want to handle each chunk. These options are as follows:

```
Stage this hunk [y,n,a,d,/,j,J,g,e,?]? ?
y - stage this hunk
n - do not stage this hunk
a - stage this and all the remaining hunks in the file
d - do not stage this hunk nor any of the remaining hunks in the file
g - select a hunk to go to
/ - search for a hunk matching the given regex
j - leave this hunk undecided, see next undecided hunk
J - leave this hunk undecided, see next hunk
k - leave this hunk undecided, see previous undecided hunk
K - leave this hunk undecided, see previous hunk
s - split the current hunk into smaller hunks
e - manually edit the current hunk
? - print help
```