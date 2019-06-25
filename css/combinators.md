# CSS Combinators

* Adjacent sibling
    * Matches the second element only if it immediately follows the first element, and both are children of the same parent element
* General sibling
    * Matches the second element only if it follows the first element (though not necessarily immediately), and both are children of the same parent element
* Children
    * Matches only those elements matched by the second selector that are the *immediate* children of elements matched by the first
* Descendant
    * Combines two selectors such that elements matched by the second selector are selected if they have an ancestor element matching the first selector
* Column
    * Matches only those elements matched by the second selector that belong to the column elements matched by the first

| Combinator | Symbol | Example |
| --- | --- | --- |
| Adjacent sibling | `+` | `img + p` |
| General sibling | `~` | `img ~ p` |
| Children | `>` | `div > img` |
| Descendant | ` ` | `#main-nav span` |
| Column | `\|\|` | `col \|\| td` |
