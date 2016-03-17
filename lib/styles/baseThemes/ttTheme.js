'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require('../colors');

var _colorManipulator = require('../../utils/color-manipulator');

var _colorManipulator2 = _interopRequireDefault(_colorManipulator);

var _spacing = require('../spacing');

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * TT theme
 */

var COLORS = {
  baseBackground: '#fcfcfc',
  baseGreyDetail: '#e9e9e9',
  primary1Color: '#4cc3d4',
  primary2Color: '#4cc3d4',
  primaryGradient: "linear-gradient(#83e2f0, #74d7e6)",
  primaryDetail: '#4cc3d4',
  secondaryColor: '#50627b',
  white: '#fff',
  alert: '#ef7973',
  selectColor: '#50627b'
};

var FONTS = {
  baseBackground: '#fcfcfc',
  baseGreyDetail: '#e9e9e9'
};

exports.default = {
  spacing: _spacing2.default,
  fontFamily: 'Proxima Nova',
  palette: {
    primary1Color: COLORS.primary1Color,
    primary2Color: COLORS.primary2Color,
    primary3Color: _colors.grey400,
    accent1Color: _colors.pinkA200,
    accent2Color: _colors.grey100,
    accent3Color: _colors.grey500,
    textColor: _colors.darkBlack,
    alternateTextColor: _colors.white,
    canvasColor: _colors.white,
    borderColor: _colors.grey300,
    disabledColor: _colorManipulator2.default.fade(_colors.darkBlack, 0.3),
    pickerHeaderColor: _colors.cyan500,
    clockCircleColor: _colorManipulator2.default.fade(_colors.darkBlack, 0.07),
    shadowColor: _colors.fullBlack,
    alertColor: COLORS.alert,
    selectColor: COLORS.selectColor
  }
};
module.exports = exports['default'];