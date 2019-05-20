# Conventional Commits

## What

Conventional Commits is a lightweight specification for how to structure commit messages.

The different types of commits correspond nicely to semantic versions.

* `fix` => PATCH releases
* `feat` => MINOR releases
* `BREAKING CHANGE` => MAJOR releases

### Usage

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

The two main types of commits are:

* `fix`: Commit that fixes a bug
* `feat`: Commit that introduces a new feature

If your commit introduces a breaking API change, add `BREAKING CHANGE` to the beginning of the optional body or footer section. You can do this in any type of commit.

### Example

```
fix(navigation): Adds accessibility keyboard controls for navbar
```


## Why

Having a set convention for commit messages makes it easier for automated tools to process commit histories.

Some tools, like [lerna](https://github.com/lerna/lerna/blob/master/commands/version/README.md) use conventional commits to decide how to bump package versions (according to semantic versioning rules).

## Resources

* [ConventionalCommits.org](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)