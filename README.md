# react-multi-toggle

React-Multi-Toggle is a stylish & lightweight toggle component that extends the functionality of a checkbox or a radio button

![alt text](https://github.com/danielarias123/react-multi-toggle/blob/master/example/images/react-multi-toggle-example.gif "Toggle Gif")
![alt text](https://github.com/danielarias123/react-multi-toggle/blob/master/example/images/react-multi-toggle-example-2.gif "Toggle Gif 2")

Installation
------------

Can be installed as an [npm package](https://www.npmjs.com/package/react-multi-toggle)

```
npm install react-multi-toggle
```

## Development
Example can be found [here](https://github.com/danielarias123/react-multi-toggle/blob/master/example).


```shell
npm i
npm start
```
Runs example on the webpack dev server on `http://localhost:8080/` with Hot Module Reloading enabled.

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

  onGroupSizeSelect = value => this.setState({ groupSize: value });

  render = () => {
    const { groupSize } = this.state;

    return (
      <MultiToggle
        options={groupOptions}
        selectedOption={groupSize}
        onSelectOption={this.onGroupSizeSelect}
        label="Select Group Size"
      />
    );
  }


}

module.exports = Example;
```

Include the component's [CSS](./style.css) through [style-loader](https://www.npmjs.com/package/style-loader) using `require("../style.css")` or by adding styles to your existing stylesheets.

Props
-----

| Name | Type | Required | Description |
|:---|:---|:---|:---|
| options | `Array<Object>` | Yes | Ordered array of options to render. Explained further below. |
| selectedOption | `Any` | Yes | Currently selected value. |
| onSelectOption | `Function` | No | Callback when option is selected. Receives the selected option value as parameter |
| label | `Any` | No | Optional label to add above toggle. |
| className | `string` | No | Optional style class to apply to toggle component. |

### options format
Toggle prop `options` is any array of objects with keys:

| Key | Type | Required | Description |
|:---|:---|:---|:---|
| value | `Any` | Yes | Value passed by prop `onSelectOption`. |
| displayName | `String` or `React Element` | No | Label rendered on toggle for each option. If omitted, value will be used. |
| optionClass | `String` | No | Optional class to apply to toggle when option is selected. |


## License

MIT
