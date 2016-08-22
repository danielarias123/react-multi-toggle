# react-multi-toggle

React-Multi-Toggle is a stylish toggle component that extends the functionality of a checkbox or a radio button

Installation
------------

Can be installed as an [npm package](https://www.npmjs.com/package/react-multi-toggle);

```
npm install react-multi-toggle
```

Usage
-----
Example using es6 syntax

```jsx
import React, { Component } from `react`;
import MultiToggle from `react-multi-toggle`;

const groupOptions = [
  {
    displayName: 'Couple',
    value: 2
  },
  {
    displayName: 'Family',
    value: 4
  },
];

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupSize: 2
    };
  }

  onFamilySizeSelect = value => this.setState({ groupSize: value })

  render = () => {
    const { groupSize } = this.state;

    <MultiToggle
      options={groupOptions}
      selectedOption={groupSize}
      onSelectOption={onFamilySizeSelect}
      label="Select Group Size"
    />
  }


}

module.exports = Example;
```

Include the component's [CSS](./style.css) through [style-loader](https://www.npmjs.com/package/style-loader) using `require("../style.css")` or by adding styles to your existing stylesheets.

## License

MIT
