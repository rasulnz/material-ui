'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _iconButton = require('../icon-button');

var _iconButton2 = _interopRequireDefault(_iconButton);

var _toolbar = require('../toolbar/toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

var _toolbarGroup = require('../toolbar/toolbar-group');

var _toolbarGroup2 = _interopRequireDefault(_toolbarGroup);

var _chevronLeft = require('../svg-icons/navigation/chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = require('../svg-icons/navigation/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _slideIn = require('../transition-groups/slide-in');

var _slideIn2 = _interopRequireDefault(_slideIn);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    position: 'relative',
    padding: 0,
    backgroundColor: 'inherit',
    height: 48
  },
  right: {
    left: '-67px'
  },
  left: {
    right: '-67px'
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 600,
    position: 'absolute',
    top: 17,
    lineHeight: '14px',
    fontSize: 11,
    height: 14,
    width: '100%',
    color: (0, _getMuiTheme2.default)().palette.selectColor,
    textAlign: 'center',
    left: 0
  },
  icon: {
    fill: (0, _getMuiTheme2.default)().palette.primary1Color
  }
};

var CalendarToolbar = _react2.default.createClass({
  displayName: 'CalendarToolbar',


  propTypes: {
    DateTimeFormat: _react2.default.PropTypes.func.isRequired,
    displayDate: _react2.default.PropTypes.object.isRequired,
    locale: _react2.default.PropTypes.string.isRequired,
    nextMonth: _react2.default.PropTypes.bool,
    onMonthChange: _react2.default.PropTypes.func,
    prevMonth: _react2.default.PropTypes.bool
  },

  contextTypes: {
    muiTheme: _react2.default.PropTypes.object
  },

  //for passing default theme context to children
  childContextTypes: {
    muiTheme: _react2.default.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      nextMonth: true,
      prevMonth: true
    };
  },
  getInitialState: function getInitialState() {
    return {
      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)(),
      transitionDirection: 'up'
    };
  },
  getChildContext: function getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    };
  },


  //to update theme inside state whenever a new theme is passed down
  //from the parent / owner using context
  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({ muiTheme: newMuiTheme });

    if (nextProps.displayDate !== this.props.displayDate) {
      var direction = nextProps.displayDate > this.props.displayDate ? 'up' : 'down';
      this.setState({
        transitionDirection: direction
      });
    }
  },
  handleTouchTapPrevMonth: function handleTouchTapPrevMonth() {
    if (this.props.onMonthChange && this.props.prevMonth) this.props.onMonthChange(-1);
  },
  handleTouchTapNextMonth: function handleTouchTapNextMonth() {
    if (this.props.onMonthChange && this.props.nextMonth) this.props.onMonthChange(1);
  },
  render: function render() {
    var _props = this.props;
    var DateTimeFormat = _props.DateTimeFormat;
    var locale = _props.locale;
    var displayDate = _props.displayDate;


    var dateTimeFormatted = new DateTimeFormat(locale, {
      month: 'long',
      year: 'numeric'
    }).format(displayDate);

    var nextButtonIcon = this.state.muiTheme.isRtl ? _react2.default.createElement(_chevronRight2.default, null) : _react2.default.createElement(_chevronLeft2.default, null);
    var prevButtonIcon = this.state.muiTheme.isRtl ? _react2.default.createElement(_chevronLeft2.default, null) : _react2.default.createElement(_chevronRight2.default, null);

    return _react2.default.createElement(
      _toolbar2.default,
      { style: styles.root, noGutter: true },
      _react2.default.createElement(
        'span',
        { style: styles.title },
        dateTimeFormatted
      ),
      _react2.default.createElement(
        _toolbarGroup2.default,
        { key: 0, style: styles.left, float: 'left' },
        _react2.default.createElement(
          _iconButton2.default,
          {
            iconStyle: styles.icon,
            style: styles.button,
            disabled: !this.props.prevMonth,
            onTouchTap: this.handleTouchTapPrevMonth },
          nextButtonIcon
        )
      ),
      _react2.default.createElement(
        _toolbarGroup2.default,
        { key: 1, style: styles.right, float: 'right' },
        _react2.default.createElement(
          _iconButton2.default,
          {
            iconStyle: styles.icon,
            style: styles.button,
            disabled: !this.props.nextMonth,
            onTouchTap: this.handleTouchTapNextMonth
          },
          prevButtonIcon
        )
      )
    );
  }
});

exports.default = CalendarToolbar;
module.exports = exports['default'];