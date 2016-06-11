import React from 'react';
import IconButton from '../icon-button';
import Toolbar from '../toolbar/toolbar';
import ToolbarGroup from '../toolbar/toolbar-group';
import NavigationChevronLeft from '../svg-icons/navigation/chevron-left';
import NavigationChevronRight from '../svg-icons/navigation/chevron-right';
import SlideInTransitionGroup from '../transition-groups/slide-in';
import getMuiTheme from '../styles/getMuiTheme';

const styles = {
  root: {
    position: 'relative',
    padding: 0,
    backgroundColor: 'inherit',
    height: 48,
  },
  right: {
    left: '-67px',
  },
  left: {
    right: '-67px',
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
    color: getMuiTheme().palette.selectColor,
    textAlign: 'center',
    left: 0
  },
  icon: {
    fill: getMuiTheme().palette.primary1Color,
  }
};

const CalendarToolbar = React.createClass({

  propTypes: {
    DateTimeFormat: React.PropTypes.func.isRequired,
    displayDate: React.PropTypes.object.isRequired,
    locale: React.PropTypes.string.isRequired,
    nextMonth: React.PropTypes.bool,
    onMonthChange: React.PropTypes.func,
    prevMonth: React.PropTypes.bool,
  },

  contextTypes: {
    muiTheme: React.PropTypes.object,
  },

  //for passing default theme context to children
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getDefaultProps() {
    return {
      nextMonth: true,
      prevMonth: true,
    };
  },

  getInitialState() {
    return {
      muiTheme: this.context.muiTheme || getMuiTheme(),
      transitionDirection: 'up',
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  //to update theme inside state whenever a new theme is passed down
  //from the parent / owner using context
  componentWillReceiveProps(nextProps, nextContext) {
    const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({muiTheme: newMuiTheme});

    if (nextProps.displayDate !== this.props.displayDate) {
      const direction = nextProps.displayDate > this.props.displayDate ? 'up' : 'down';
      this.setState({
        transitionDirection: direction,
      });
    }
  },

  handleTouchTapPrevMonth() {
    if (this.props.onMonthChange && this.props.prevMonth) this.props.onMonthChange(-1);
  },

  handleTouchTapNextMonth() {
    if (this.props.onMonthChange && this.props.nextMonth) this.props.onMonthChange(1);
  },

  render() {
    const {
      DateTimeFormat,
      locale,
      displayDate,
    } = this.props;

    const dateTimeFormatted = new DateTimeFormat(locale, {
      month: 'long',
      year: 'numeric',
    }).format(displayDate);

    const nextButtonIcon = this.state.muiTheme.isRtl ? <NavigationChevronRight /> : <NavigationChevronLeft />;
    const prevButtonIcon = this.state.muiTheme.isRtl ? <NavigationChevronLeft /> : <NavigationChevronRight />;

    return (
      <Toolbar style={styles.root} noGutter={true}>
        <span style={styles.title}>{dateTimeFormatted}</span>
        <ToolbarGroup key={0} style={styles.left} float="left">
          <IconButton
            iconStyle={styles.icon}
            style={styles.button}
            disabled={!this.props.prevMonth}
            onTouchTap={this.handleTouchTapPrevMonth}>
            {nextButtonIcon}
          </IconButton>
        </ToolbarGroup>
        <ToolbarGroup key={1} style={styles.right} float="right">
          <IconButton
            iconStyle={styles.icon}
            style={styles.button}
            disabled={!this.props.nextMonth}
            onTouchTap={this.handleTouchTapNextMonth}
          >
            {prevButtonIcon}
          </IconButton>
        </ToolbarGroup>
      </Toolbar>
    );
  },

});

export default CalendarToolbar;
