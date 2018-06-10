"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var MultiToggle = function MultiToggle(_ref) {
  var selectedOption = _ref.selectedOption,
      options = _ref.options,
      onSelectOption = _ref.onSelectOption,
      className = _ref.className,
      label = _ref.label;

  // If required variables aren't passed, return empty
  if (!options || selectedOption === null) return null;

  var numOptions = options.length;

  var columnWidth = numOptions ? 100 / numOptions : numOptions;

  var isSelectedOption = function isSelectedOption(option) {
    return option.value == selectedOption;
  };

  var getSelectedIndex = function getSelectedIndex() {
    var indexFound = options.findIndex(function (option) {
      return isSelectedOption(option);
    });
    return indexFound > -1 ? indexFound : 0;
  };

  var createToggleOption = function createToggleOption() {
    var _ref2 = arguments.length <= 0 ? undefined : arguments[0],
        value = _ref2.value,
        displayName = _ref2.displayName,
        selectedDisplayName = _ref2.selectedDisplayName,
        isDisabled = _ref2.isDisabled;

    var isSelected = isSelectedOption(arguments.length <= 0 ? undefined : arguments[0]);

    var derivedDisplayName = !isSelected ? displayName : selectedDisplayName || displayName;

    var selectOption = function selectOption() {
      return onSelectOption(value);
    };

    var optionClass = (0, _classnames2.default)('toggleOption', {
      selected: isSelected,
      optionDisabled: isDisabled
    });

    var optionStyle = {
      width: columnWidth + "%"
    };

    return React.createElement(
      "div",
      {
        key: arguments.length <= 1 ? undefined : arguments[1],
        onClick: isDisabled ? null : selectOption,
        className: optionClass,
        style: optionStyle
      },
      derivedDisplayName || value
    );
  };

  var toggleClass = (0, _classnames2.default)("toggleContainer", className);
  var toggleStyle = {
    width: columnWidth + "%",
    transform: "translateX(" + 100 * getSelectedIndex() + "%)",
    WebkitTransform: "translateX(" + 100 * getSelectedIndex() + "%)",
    MozTransform: "translateX(" + 100 * getSelectedIndex() + "%)",
    msTransform: "translateX(" + 100 * getSelectedIndex() + "%)"
  };

  var selectedToggleClass = (0, _classnames2.default)("toggle", options[getSelectedIndex()].optionClass);

  var renderLabel = label ? React.createElement(
    "label",
    null,
    label
  ) : null;

  return React.createElement(
    "div",
    { className: "toggle-wrapper" },
    renderLabel,
    React.createElement(
      "div",
      { className: toggleClass },
      options.map(createToggleOption),
      React.createElement("div", { className: selectedToggleClass, style: toggleStyle })
    )
  );
};

MultiToggle.propTypes = {
  className: _propTypes2.default.any,
  options: _propTypes2.default.array.isRequired,
  selectedOption: _propTypes2.default.any.isRequired,
  onSelectOption: _propTypes2.default.func,
  label: _propTypes2.default.any
};

exports.default = MultiToggle;
