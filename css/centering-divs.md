# Centering Divs

## Horizontally Centered `div`

### Option 1: Only one `div` (no Flexbox)

HTML:

```html
<div class="content">
  <h1>Stuff goes in here</h1>
</div>
```

CSS:

```css
.content {
  width: 50%; /* can make this 100% for full width of parent */
  margin: auto;
  
  /* extra styling for making it easier to see */
  text-align: center;
  border: 1px solid blue;
}
```

### Option 2: Flexbox

HTML:

```html
<div class="container">
  <div class="content">
    <h1>Stuff goes here</h1>
  </div>
</div>
```

CSS:

```css
.container {
  display: flex;
  justify-content: center;
}

.content {
  /* extra styling for making it easier to see */
  border: 1px solid blue;
}
```

## Vertically Centered `div`

### Option 1: Flexbox

HTML:

```html
<div class="container">
  <div class="content">
    <h1>Stuff goes here</h1>
  </div>
</div>
```

CSS:

```css
.container {
  display: flex;
  align-items: center;
  height: 100vh;
}

.content {
  /* extra styling for making it easier to see */
  border: 1px solid blue;
}
```

