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

var _floatingActionButton = require('../floating-action-button.jsx');

var _floatingActionButton2 = _interopRequireDefault(_floatingActionButton);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(state, props) {
  var outline = props.outline;
  var size = props.size;
  var disabled = props.disabled;
  var buttonType = props.buttonType;
  var baseTheme = state.muiTheme.baseTheme;


  var baseButton = {
    border: 'solid 2px ' + baseTheme.palette.primary1Color,
    lineHeight: 'inherit',
    minWidth: 0,
    margin: '0 10px'
  };

  var defaultButton = {
    backgroundColor: baseTheme.palette.primary1Color,
    color: '#fff'
  };

  var outlineButton = {
    backgroundColor: 'transparent',
    color: baseTheme.palette.primary1Color
  };

  var buttonSizes = {
    small: { height: '30px', padding: '0 19px', fontSize: '14px', borderRadius: '20px' },
    medium: { height: '40px', padding: '0 45px', fontSize: '16px', borderRadius: '28px' },
    large: { height: '50px', fontSize: '18px' }
  };

  var block = {
    width: '100%',
    display: 'block'
  };

  var disabledStyle = {
    backgroundColor: '#a4dfe8',
    borderColor: '#a4dfe8'
  };

  var buttonStyle = defaultButton;

  outline && _lodash2.default.extend(buttonStyle, outlineButton);
  disabled && _lodash2.default.extend(buttonStyle, disabledStyle);

  buttonType == 'block' && _lodash2.default.extend(buttonStyle, block);

  return _lodash2.default.extend(baseButton, buttonStyle, buttonSizes[size] || buttonSizes.medium);
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
    size: _react2.default.PropTypes.string,
    outline: _react2.default.PropTypes.bool
  },

  render: function render() {
    var _props = this.props;
    var label = _props.label;
    var style = _props.style;
    var prepareStyles = this.state.muiTheme.prepareStyles;


    var styles = getStyles(this.state, this.props);

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