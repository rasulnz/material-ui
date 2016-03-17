'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _calendar = require('../date-picker/calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _dateTime = require('../utils/date-time');

var _dateTime2 = _interopRequireDefault(_dateTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dayAbbreviation = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
var dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var monthLongList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var TTDatePickerBlock = _react2.default.createClass({
    displayName: 'TTDatePickerBlock',
    getDefaultProps: function getDefaultProps() {
        return {
            DateTimeFormat: _dateTime2.default.DateTimeFormat,
            container: 'dialog',
            locale: 'en-US',
            wordings: {
                ok: 'OK',
                cancel: 'Cancel'
            },
            hideDateDisplay: true,
            formatDate: _dateTime2.default.format,
            autoOk: false,
            disableYearSelection: false,
            style: {},
            firstDayOfWeek: 0,
            disabled: false
        };
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            { style: styles.root },
            _react2.default.createElement(_calendar2.default, _extends({
                hideDateDisplay: this.props.hideDateDisplay,
                ref: 'calendar',
                onDayTouchTap: this.handleTouchTapDay,
                initialDate: this.props.initialDate,
                open: true,
                minDate: this.props.minDate,
                maxDate: this.props.maxDate,
                shouldDisableDate: this.props.shouldDisableDate,
                disableYearSelection: this.props.disableYearSelection,
                mode: this.props.mode
            }, this.props))
        );
    }
});

var styles = {
    root: {
        maxWidth: '296px'
    }
};

exports.default = TTDatePickerBlock;
module.exports = exports['default'];