'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _svgIcon = require('../../svg-icon');

var _svgIcon2 = _interopRequireDefault(_svgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeviceSignalCellularNull = function DeviceSignalCellularNull(props) {
  return _react2.default.createElement(
    _svgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z' })
  );
};
DeviceSignalCellularNull = (0, _pure2.default)(DeviceSignalCellularNull);
DeviceSignalCellularNull.displayName = 'DeviceSignalCellularNull';

exports.default = DeviceSignalCellularNull;
module.exports = exports['default'];