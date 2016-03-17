'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TTButtonRound = require('./TTButtonRound');

var _TTButtonRound2 = _interopRequireDefault(_TTButtonRound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TTButtonRoundOutline = _react2.default.createClass({
  displayName: 'TTButtonRoundOutline',


  render: function render() {
    return _react2.default.createElement(
      _TTButtonRound2.default,
      _extends({}, this.props, { outline: true }),
      this.props.children
    );
  }
});

exports.default = TTButtonRoundOutline;
module.exports = exports['default'];