# `npm` vs. `yarn`

## Introduction

`npm` and `yarn` are both package managers for Node.js.

* `npm` comes automatically with Node.js when you install it.
* `yarn` can be installed globally by running the following command:
    ```sh
    npm install -g yarn
    ```

**Why choose one over the other? (WIP.)** Yarn was originally created to address performance and security problems in `npm`, but in the years since `npm` has added new improvements, making the two package managers close competitors. Yarn installs package dependencies in parallel, which means that installation is faster for large projects.

**If you're joining an existing project, how do you know which package manager to use?** Check to see if there's a `yarn.lock` file at the top level of the directory. If there is, then use `yarn`. If there's a `package-lock.json` file instead of `yarn.lock`, use `npm`.


## Commands

| `npm` | `yarn` | What it does |
| --- | --- | --- |
| `npm install` | `yarn` | Install all the dependencies from `package.json` into the `node_modules` directory. |
| `npm install package_name` | `yarn add package_name` | Add the specified package as a dependency in your `package.json` file. |
| `npm uninstall package_name` | `yarn remove package_name` | Remove the specified package as a dependency in your `package.json` file. |
| `npm update package_name` | `yarn upgrade package_name` | Update the version of the specified dependency to the latest version. |
