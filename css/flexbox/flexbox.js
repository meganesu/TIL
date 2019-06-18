const attributes = {
  container: {
    display: [
      'flex',
      'inline-flex',
    ],
    'flex-direction': [
      'row',
      'row-reverse',
      'column',
      'column-reverse',
    ],
    'flex-wrap': [
      'nowrap',
      'wrap',
      'wrap-reverse',
    ],
    'justify-content': [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'space-evenly',
    ],
    'align-items': [
      'flex-start',
      'flex-end',
      'center',
      'stretch',
      'baseline',
    ],
    'align-content': [
      'flex-start',
      'flex-end',
      'center',
      'stretch',
      'space-between',
      'space-around',
    ]
  },
  item: {

  }
};

const updateStyle = (elementId, attribute, value) => {
  const elementToStyle = document.getElementById(elementId);
  elementToStyle.style[attribute] = value;
};

// set up container listeners
Object.entries(attributes.container)
  .forEach(([key, value]) => {
    const selectElement = document.getElementById(key);
    selectElement.addEventListener("change", event => (
      updateStyle("container", key, event.target.value)
    ));
    console.log(key, value);
  });
