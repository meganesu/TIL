# `jsx-a11y/href-no-hash`

This lint rule comes up when you try to use an anchor tag without a valid href.

```html
<a href="#"></a>
```

## Why Does This Rule Exist?

More info: https://github.com/facebook/create-react-app/issues/4141#issuecomment-426625915

## Takeaways

* Use anchor tags for navigation (directing users to another page).
* Use a button styled as a link for inline text that users should click on to make something happen (like clearing selected filters).