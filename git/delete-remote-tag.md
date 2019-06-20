# Delete a Remote Tag

1. List all the remote tags:
    * `$ git ls-remote --tags`
1. Find the name of the tag you want to delete. The command in the previous step will output tags in the format:
    * ```SHA-hash refs/tags/tagName```
1. Delete a remote tag:
    *  `$ git push --delete origin tagName`