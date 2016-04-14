'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _flatButton = require('../flat-button');

var _flatButton2 = _interopRequireDefault(_flatButton);

var _floatingActionButton = require('../floating-action-button');

var _floatingActionButton2 = _interopRequireDefault(_floatingActionButton);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(buttonType, outline, size, state) {
  var baseTheme = state.muiTheme.baseTheme;


  var defaultButton = {
    color: baseTheme.palette.primary1Color
  };

  var outlineButton = {
    backgroundColor: 'transparent',
    color: baseTheme.palette.primary1Color
  };

  var buttonSizes = {
    xsmall: { fontSize: '12px' },
    small: { fontSize: '14px' },
    medium: { fontSize: '16px' }
  };

  var buttonStyle = defaultButton;

  outline && _lodash2.default.extend(buttonStyle, outlineButton);

  buttonType == 'block' && _lodash2.default.extend(buttonStyle, block);

  return _lodash2.default.extend(buttonStyle, buttonSizes[size] || buttonSizes.medium);
}

var TTButtonFlat = _react2.default.createClass({
  displayName: 'TTButtonFlat',
  getInitialState: function getInitialState() {
    var zDepth = this.props.disabled ? 0 : 1;
    return {
      hovered: false,
      touched: false,
      initialZDepth: zDepth,
      zDepth: zDepth,
      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
    };
  },
  getChildContext: function getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    };
  },

  contextTypes: {
    muiTheme: _react2.default.PropTypes.object
  },

  childContextTypes: {
    muiTheme: _react2.default.PropTypes.object
  },

  //round, outline, default= filled
  propTypes: {
    buttonType: _react2.default.PropTypes.string,
    size: _react2.default.PropTypes.string,
    outline: _react2.default.PropTypes.bool
  },

  render: function render() {
    var _props = this.props;
    var label = _props.label;
    var style = _props.style;
    var prepareStyles = this.state.muiTheme.prepareStyles;


    var styles = getStyles(this.props.buttonType, this.props.outline, this.props.size, this.state);

    return _react2.default.createElement(
      _flatButton2.default,
      _extends({}, this.props, { style: styles }),
      this.props.children
    );
  }
});

exports.default = TTButtonFlat;
module.exports = exports['default'];