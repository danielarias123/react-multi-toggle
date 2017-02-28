'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MultiToggle = function MultiToggle(_ref) {
  var selectedOption = _ref.selectedOption;
  var options = _ref.options;
  var onSelectOption = _ref.onSelectOption;
  var className = _ref.className;
  var label = _ref.label;

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
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var selectOption = function selectOption() {
      return onSelectOption(args[0].value);
    };

    var optionClass = (0, _classnames2.default)('toggleOption', { selected: isSelectedOption(args[0]) });
    var optionStyle = {
      width: columnWidth + '%'
    };
    return _react2.default.createElement(
      'div',
      {
        key: args[1],
        onClick: selectOption,
        className: optionClass,
        style: optionStyle
      },
      args[0].displayName || args[0].value
    );
  };

  var toggleClass = (0, _classnames2.default)('toggleContainer', className);
  var toggleStyle = {
    width: columnWidth + '%',
    transform: 'translateX(' + 100 * getSelectedIndex() + '%)',
    WebkitTransform: 'translateX(' + 100 * getSelectedIndex() + '%)',
    MozTransform: 'translateX(' + 100 * getSelectedIndex() + '%)',
    msTransform: 'translateX(' + 100 * getSelectedIndex() + '%)'
  };

  var selectedToggleClass = (0, _classnames2.default)('toggle', options[getSelectedIndex()].optionClass);

  var renderLabel = label ? _react2.default.createElement(
    'label',
    null,
    label
  ) : null;

  return _react2.default.createElement(
    'div',
    { className: 'toggle-wrapper' },
    renderLabel,
    _react2.default.createElement(
      'div',
      { className: toggleClass },
      options.map(createToggleOption),
      _react2.default.createElement('div', { className: selectedToggleClass, style: toggleStyle })
    )
  );
};

MultiToggle.propTypes = {
  className: _react.PropTypes.any,
  options: _react.PropTypes.array.isRequired,
  selectedOption: _react.PropTypes.any.isRequired,
  onSelectOption: _react.PropTypes.func,
  label: _react.PropTypes.string
};

exports.default = MultiToggle;
