# Alt Text

## Options for labeling images

* `aria-labelledby` (highest priority; will overwrite others)
* `aria-label`
* `alt`
* `title` (lowest priority)

## Characteristics

Alt text should be:

* Programatically determinable (i.e., can be found by a screen reader)
* Meaningful (convey image's purpose and author's intent)
* Concise (<150 characters, like a Tweet)

Decorative images should have **empty** alt text (`alt=""`), not *no* alt text.

* Also applies to redundant images (e.g. a home icon on a button that also shows the word "Home")

## Complex Images

What do you do when alt text isn't enough to sufficiently describe the image?

* Still need a brief description in the alt text.
* *In addition,* can add a longer description.
    * Must be visible to sighted users.
    * Must be programmatically associated with the image (e.g., `longdesc` attribute or `aria-describedby`)


Options for longer descriptions:

* On the same page
    * Describe in HTML, e.g. `<p>` following image
    * `<button>` to expand collapsed region with long description. e.g., "Expand to show detailed description."
    * `<button>` to open a dialog with the long description. e.g., "Show detailed description."
* On a different page
    * Link to long description on another page
    * Link to long description on another page via the `longdesc` attribute

```html
<img
  src="image.jpg"
  alt="Bar chart with percentages. Extended description below chart."
  aria-describedby="description-extended"
/>
<div id="description-extended">
  <p>Full long description</p>
</div>
```

## Considerations

* **How much interpretation to provide?** Depends on the author's goal.
    * Is the intent for users to interpret the description on their own? Use more describing words. (e.g., if the image is part of an assessment, and the student's job is to provide the interpretation.)
    * Is the intent to convey the author's own interpretation? Use the same describing words, but then add the author's interpretation afterward. (e.g., when the image shows a painting and the author wants to convey its meaning.)

* **Is the longer description needed?** Or is a slightly longer (still ~150 characters) alt text enough to convey the important information?

From less detail to more detail:

1. **Brief alt text.** Good for simpler informative images.
2. **Longer alt text.** (~150 characters.) Good for short summary of diagrams.
3. **Brief alt text + longer description.** Helpful when user has to provide interpretation (e.g., learning assessments).

## Resources

* [Deque University](https://dequeuniversity.com)
* [W3C Alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)
* [Everything you need to know to write effective alt text](https://support.microsoft.com/en-us/office/everything-you-need-to-know-to-write-effective-alt-text-df98f884-ca3d-456c-807b-1a1fa82f5dc2)
