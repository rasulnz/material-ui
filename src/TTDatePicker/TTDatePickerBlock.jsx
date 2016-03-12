import React from 'react';

import Calendar from '../date-picker/calendar';

import DateTime from '../utils/date-time';

const dayAbbreviation = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec'];
const monthLongList = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

const TTDatePickerBlock = React.createClass({

    getDefaultProps() {
        return {
            DateTimeFormat: DateTime.DateTimeFormat,
            container: 'dialog',
            locale: 'en-US',
            wordings: {
                ok: 'OK',
                cancel: 'Cancel',
            },
            hideDateDisplay: true,
            formatDate: DateTime.format,
            autoOk: false,
            disableYearSelection: false,
            style: {},
            firstDayOfWeek: 0,
            disabled: false,
        };
    },

    render() {
        return (
            <div style={styles.root}>
                <Calendar
                    hideDateDisplay={this.props.hideDateDisplay}
                    ref="calendar"
                    onDayTouchTap={this.handleTouchTapDay}
                    initialDate={this.props.initialDate}
                    open={true}
                    minDate={this.props.minDate}
                    maxDate={this.props.maxDate}
                    shouldDisableDate={this.props.shouldDisableDate}
                    disableYearSelection={this.props.disableYearSelection}
                    mode={this.props.mode}
                    {...this.props}></Calendar>
            </div>
        )
    },
});

var styles = {
    root: {
        maxWidth: '315px',
    }
};

export default TTDatePickerBlock;