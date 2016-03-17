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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(buttonType, outline, state) {
  var baseTheme = state.muiTheme.baseTheme;


  console.log(baseTheme);
  var baseButton = {
    border: 'solid 2px ' + baseTheme.palette.primary2Color
  };

  var defaultButton = {
    background: baseTheme.palette.primary2Color
  };

  var outlineButton = {
    background: 'transparent'
  };

  var roundButton = {
    borderRadius: '50%'
  };

  var buttonStyle = buttonType == 'round' ? roundButton : defaultButton;

  outline && _lodash2.default.extend(buttonStyle, outlineButton);

  return _lodash2.default.extend(baseButton, buttonStyle);
}

var TTButton = _react2.default.createClass({
  displayName: 'TTButton',
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
    outline: _react2.default.PropTypes.bool
  },

  render: function render() {
    var _props = this.props;
    var label = _props.label;
    var style = _props.style;
    var prepareStyles = this.state.muiTheme.prepareStyles;


    var styles = getStyles(this.props.buttonType, this.props.outline, this.state);
    console.log(styles);

    return _react2.default.createElement(
      _flatButton2.default,
      _extends({}, this.props, { style: styles }),
      this.props.children
    );
  }
});

exports.default = TTButton;

/*

base: {
  border: `solid 2px ${COLORS.primaryDetail}`,
    borderRadius:'20px',
    minWidth:'80px',
    height:'30px',
    color: COLORS.primaryDetail,
    backgroundColor: COLORS.white,
    fontSize: '16px',
    fontWeight:'600',
    ':focus': {
    outline: 'none'
  }
},
fill: {
  backgroundColor: COLORS.primaryDetail,
    color:'white',
    fontWeight:'600'
},
medium:{

},
large: {
  padding: '10px 16px',
    fontSize: '18px',
    lineHeight: 1.3333333
},
small: {
  padding: '5px 10px',
    fontSize: '12px',
    lineHeight: 1.5
},
dynamic: {
  display:'block',
    minHeight: '40px',
    width:'100%'
},
round: {
  borderRadius: '50%',
    color: COLORS.primaryDetail,
    border: `solid 2px ${COLORS.primaryDetail}`,
    height:'34px',
    width:'34px',
    minWidth:'0',
}
*/

module.exports = exports['default'];