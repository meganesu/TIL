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

// build HTML elements
const createAttributesEditor = () => {
  const containerAttributes = attributes.container;

  const containerEditor = document.getElementById("container-attributes");

  Object.entries(containerAttributes)
    .forEach(([attribute, values]) => {
      const element = buildEditorElement(attribute, values);

      containerEditor.appendChild(element);
    });

  // set up container listeners
  Object.entries(attributes.container)
    .forEach(([key, value]) => {
      const selectElement = document.getElementById(key);
      selectElement.addEventListener("change", event => (
        updateStyle("container", key, event.target.value)
      ));
      console.log(key, value);
    });

};

const buildEditorElement = (attribute, values) => {
  // set up <p>
  const element = document.createElement('p');

  // set up <label>, append to p
  const label = document.createElement('label');
  label.innerText = `${attribute}:`;
  element.appendChild(label);

  // set up <select>, append to p
  const select = document.createElement('select');
  select.id = attribute;
  element.appendChild(select);

  // create first '--' option in dropdown
  const emptyOption = document.createElement('option');
  emptyOption.value = '';
  emptyOption.innerText = '--';
  select.appendChild(emptyOption);

  // for each value in values:
  values.forEach(value => {
    // set up <option>, append to select
    const option = document.createElement('option');
    option.value = value;
    option.innerText = value;
    select.appendChild(option);
  });

  return element;
};

const updateStyle = (elementId, attribute, value) => {
  const elementToStyle = document.getElementById(elementId);
  elementToStyle.style[attribute] = value;
};

document.body.onload = createAttributesEditor;
