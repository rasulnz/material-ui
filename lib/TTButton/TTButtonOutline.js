'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TTButton = require('./TTButton');

var _TTButton2 = _interopRequireDefault(_TTButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TTButtonOutline = _react2.default.createClass({
  displayName: 'TTButtonOutline',


  render: function render() {
    return _react2.default.createElement(
      _TTButton2.default,
      _extends({}, this.props, { ttButtonType: 'outline' }),
      this.props.children
    );
  }
});

exports.default = TTButtonOutline;
module.exports = exports['default'];