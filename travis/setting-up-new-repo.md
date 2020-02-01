# Setting Up Automatic Deploys with Travis CI and GitHub Pages

## First Time

Resource: [Travis CI Tutorial from the official docs](https://docs.travis-ci.com/user/tutorial/)

1. Install the Travis CI app on GitHub. Find [Travis CI on the GitHub Marketplace](https://github.com/marketplace/travis-ci).

## For Each New Repo

1. Create a `.travis.yml` file in your repo.
    ```
    language: node_js
    node_js: "10"

    script:
      - npm test
      - npm run build

    deploy:
      provider: pages
      skip_cleanup: true
      github_token: $GITHUB_TOKEN
      keep_history: true
      local_dir: public
      on:
        branch: master
    ```
    * Change `local_dir` to whatever directory is your build folder. (Where do files go when you build your site?)
    * See the [Travis documentation on GitHub Pages Deployment](https://docs.travis-ci.com/user/deployment/pages/) for more info.
1. Authorize Travis CI to have access to your new repo.
    * Click on your profile icon in the navbar.
    * Click "Manage repositories on GitHub".
    * Under "Repository Access", choose "Only select repositories".
    * Search for the repo you want to add authorization to, then click "Approve and install".
1. Personal Access Token
    * [Create a personal access token in your GitHub user settings.](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)
    * Add this as an environment variable in the Travis CI settings for your repo.
1. Use gh-pages branch as source for GitHub Pages site
    * In repo settings, under Options -> GitHub Pages, set "Source" to "gh-pages branch". This is the default branch where Travis CI will deploy your built code.
