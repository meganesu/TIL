function updateStyle(elementId, attribute, value) {
  const elementToStyle = document.getElementById(elementId);
  elementToStyle.style[attribute] = value;
}

const displayElement = document.getElementById("display");
displayElement.addEventListener("change", (event) => (
  updateStyle("container", "display", event.target.value)
));
